import { CollectionConfig } from "payload/types"

const District: CollectionConfig = {
    labels: {
        plural: "Distritos",
        singular: "Distrito"
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
		},
    ]
}

export default District
