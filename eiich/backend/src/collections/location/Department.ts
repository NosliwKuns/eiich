import { CollectionConfig } from "payload/types"

const Department: CollectionConfig = {
	labels: {
		plural: "Departamentos",
		singular: "Departamento",
	},
	slug: "department",
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
			admin: {
				readOnly: true
			},
			hasMany: true,
		},
	],
	hooks: {
		afterDelete: [
			async ({ req, doc }) => {
				if (doc.province) {
					const allProvinces = await req.payload.db.find({
						collection: "province",
						req,
					})
					await Promise.all(
						allProvinces.docs.map(async (element) => {
							await req.payload.db.updateOne({
								collection: "province",
								data: {
									department: [],
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

export default Department
