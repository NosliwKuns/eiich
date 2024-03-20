import { CollectionConfig } from "payload/types"

const Departamento: CollectionConfig = {
    labels: {
        plural: "Departamentos",
        singular: "Departamento"
    },
	slug: "departamento",
	auth: false,
	admin: {
		useAsTitle: "nombre",
	},
	fields: [
        {
			name: "nombre",
            label: "Nombre",
			type: "text",
			required: true,
		},
        {
            label: "Provincia",
			name: "provincia",
			type: "relationship",
			relationTo: "provincia",
			hasMany: true,
			//defaultValue: [],
		},
    ]
}

export default Departamento
