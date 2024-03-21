import { CollectionConfig } from "payload/types"
import { APIError } from "payload/errors"

const District: CollectionConfig = {
	labels: {
		plural: "Distritos",
		singular: "Distrito",
	},
	slug: "district",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			label: "Nombre",
			type: "text",
			required: true,
		},
		{
			name: "province",
			label: "Provincia",
			type: "relationship",
			relationTo: "province",
			hasMany: true,
			hooks: {
				afterChange: [
					async ({ req, data }) => {
						if (data.province) {
							const district = await req.payload.db.findOne({
								collection: "district",
								where: {
									name: {
										equals: data.name,
									},
								},
								req,
							})

							const provinces: any = await req.payload.db.find({
								collection: "province",
								req,
							})
							const hasdistrict: any = provinces.docs.find((doc) => doc.id === data.province[0])

							await req.payload.db.updateOne({
								collection: "province",
								data: {
									district: hasdistrict.district
										? hasdistrict.district.concat(district.id)
										: [district.id],
								},
								id: data.province[0],
								req: req,
							})

							const provincesWithDistrict: any = await req.payload.db.find({
								collection: "province",
								req,
							})

							await Promise.all(
								provincesWithDistrict.docs.map(async (element) => {
									if (element.district && element.id !== data.province[0]) {
										await req.payload.db.updateOne({
											collection: "province",
											data: {
												district: element.district.filter((item) => item !== district.id),
											},
											id: element.id,
											req: req,
										})
									}
								})
							)
						}
					},
				],
			},
		},
	],
	hooks: {
		beforeChange: [
			({ data }) => {
				if (data.province && data.province.length > 1) {
					throw new APIError('El campo "Provincia" solo puede tener un valor', 403)
				}
			},
		],
		afterDelete: [
			async ({ req, doc }) => {
				if (doc.province) {
					const allProvinces: any = await req.payload.db.find({
						collection: "province",
						req,
					})

					await Promise.all(
						allProvinces.docs.map(async (element) => {
							await req.payload.db.updateOne({
								collection: "province",
								data: {
									district: element.district.filter((item) => item !== doc.id),
								},
								id: element.id,
								req: req,
							})
						})
					)
				}
			},
		],
	},
}

export default District
