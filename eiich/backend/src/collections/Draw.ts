import { CollectionConfig } from "payload/types"
import Users from "./Users"
import payload from "payload"
import { LinkUsersDraw } from "../components/LinkUsersDraw"

const Draw: CollectionConfig = {
	labels: {
		plural: "Sorteos",
		singular: "Sorteo",
	},
	slug: "draw",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	upload: {
		staticURL: "/media",
		staticDir: "media",
		imageSizes: [
			{
				name: "ImagendeSorteo",
				width: 500,
				height: 600,
				position: "centre",
			},
		],
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "link",
			type: "ui",
			admin: {
        components: {
          Field: LinkUsersDraw
        }
      }
		},
		{
			name: "name",
			label: "Nombre",
			type: "text",
			required: true,
		},
		{
			name: "content",
			label: "Contenido",
			type: "text",
			required: true,
		},
		{
			name: "drawStart",
			label: "Fecha de Inicio del sorteo",
			type: "date",
			admin: {
				date: {
					pickerAppearance: "dayAndTime",
					displayFormat: "d MMM yyy, HH:mm",
				},
			},
		},
		{
			name: "drawEnd",
			label: "Fecha de Fin del sorteo",
			type: "date",
			admin: {
				date: {
					pickerAppearance: "dayAndTime",
					displayFormat: "d MMM yyy, HH:mm",
				},
			},
		},
		{
			name: "users",
			label: "Usuarios suscritos",
			type: "relationship",
			relationTo: "users",
			hasMany: true,
		},
		{
			name: "subscriptionStatus",
			label: "Estado de Subscripción",
			type: "select",
			hasMany: true,
			required: true,
			options: [
				{
					label: "Activo",
					value: "Activo",
				},
				{
					label: "Inactivo",
					value: "Inactivo",
				},
			],
		},
	],
	endpoints: [
		{
			path: "/getUsersByDrawId/:id",
			method: "get",
			handler: async (req, res, next) => {
				try {
					const { params } = req
					const result = await payload.findByID({
						collection: "draw", // required
						id: params.id, // required
					})
					if (Array.isArray(result.users)) {
						// Verifica si result.users es un array
						const usersData = result.users.map((user) => ({
							name: user.name,
							lastName: user.lastName,
							email: user.email,
							phoneNumber: user.phoneNumber,
							identificationDocumentValue:
								user.identificationDocumentValue,
						}))
						return res.json(usersData)
					} else {
						return res.json([]) // O devuelve un array vacío si no hay usuarios
					}
				} catch (error) {
					return res.status(403).send(error)
				}
			},
		},
	],
}

export default Draw
