import { CollectionConfig } from "payload/types"
import Distrito from "./Distrito"

const Provincia: CollectionConfig = {
    labels: {
        plural: "Provincias",
        singular: "Provincia"
    },
	slug: "provincia",
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
            label: "Distrito",
			name: "distrito",
			type: "relationship",
			relationTo: "distrito",
			hasMany: true,
            filterOptions:({relationTo, siblingData})=>{
				console.log(siblingData)
				if(relationTo === "distrito"){
					return true
				}
				return true
			}
		},
		{
            label: "Departamento",
			name: "departamento",
			type: "relationship",
			relationTo: "departamento",
			hasMany: true,
            hooks: {
				afterChange: [async({req, data}) => {
					console.log(req, 'no se')
					if (data) {
						const id = await req.payload.db.findOne({
							collection: "provincia",
							where: {
								name: data.name
							},
							req
						})
						console.log(id, "pruebaaa")
						await req.payload.db.updateOne({
							collection: 'departamento',
							data: {
								provincia: [id.id]
							},
							id: data.departamento[0],
							req: req,
						})
                    }
				}]
			},
		},
    ]
}

export default Provincia
