import { CollectionConfig } from "payload/types"
import { APIError } from "payload/errors"

const Province: CollectionConfig = {
	labels: {
		plural: "Provincias",
		singular: "Provincia",
	},
	slug: "province",
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
			unique: true,
		},
		{
			name: "district",
			label: "Distrito",
			type: "relationship",
			relationTo: "district",
			hasMany: true,
		},
		{
			name: "department",
			label: "Departamento",
			type: "relationship",
			relationTo: "department",
			hasMany: true,
			hooks: {
				afterChange: [
					async ({ req, data }) => {
						if (data.department) {
							const province = await req.payload.db.findOne({
								collection: "province",
								where: {
									name: {
										equals: data.name,
									},
								},
								req,
							})
							const departments: any = await req.payload.db.find({
								collection: "department",
								req,
							})
							const hasProvince: any = departments.docs.find(
								(doc) => doc.id === data.department[0]
							)
							await req.payload.db.updateOne({
								collection: "department",
								data: {
									province: hasProvince.province
										? hasProvince.province.concat(
												province.id
										  )
										: [province.id],
								},
								id: data.department[0],
								req: req,
							})
							await Promise.all(
								departments.docs.map(async (element) => {
									if (element.id !== data.department[0]) {
										await req.payload.db.updateOne({
											collection: "department",
											data: {
												province: element.province.filter(item => item !== province.id),
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
				if (data.department && data.department.length > 1) {
					throw new APIError(
						'El campo "Departamento" solo puede tener un valor',
						403
					)
				}
			},
		],
		afterDelete: [
			async ({ req, doc }) => {
				if (doc.department) {
					const allDepartments: any = await req.payload.db.find({
						collection: "department",
						req,
					})
					
					await Promise.all(
						allDepartments.docs.map(async (element) => {
							await req.payload.db.updateOne({
								collection: "department",
								data: {
									province: element.province.filter(item => item !== doc.id),
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

export default Province
