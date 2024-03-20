import { CollectionConfig } from "payload/types"

const Distrito: CollectionConfig = {
    labels: {
        plural: "Distritos",
        singular: "Distrito"
    },
	slug: "distrito",
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
            
		},
    ]
}

export default Distrito
