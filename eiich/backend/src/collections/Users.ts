import { CollectionConfig } from "payload/types"
import { APIError } from "payload/errors"
import { isAdminOrSelf } from "../access/isAdminOrSelf"
import { isAdmin } from "../access/isAdmin"

const Users: CollectionConfig = {
	labels: {
		plural: "Usuarios",
		singular: "Usuario",
	},
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email",
	},
	access: {
		create: isAdmin,
		read: isAdminOrSelf,
		update: isAdminOrSelf,
		delete: isAdmin,
	},
	fields: [
		{
			name: "roles",
			label: "Seleccionar Rol de Usuario",
			type: "select",
			hasMany: true,
			required: true,
			options: [
				{
					label: "Admin",
					value: "Admin",
				},
				{
					label: "User",
					value: "User",
				},
			],
			hooks: {
				beforeChange: [
					({ data }) => {
						if (data.roles && data.roles.length > 1) {
							throw new APIError(
								'El campo "Roles" solo puede tener un valor',
								403
							)
						}
					},
				],
			},
		},
		{
			name: "name",
			label: "Nombres",
			type: "text",
		},
		{
			name: "lastName",
			label: "Apellidos",
			type: "text",
		},
		{
			name: "dateOfBirth",
			label: "Fecha de Nacimiento",
			type: "date",
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
		{
			name: "identificationDocumentType",
			label: "Tipo de Documento de Identificación",
			type: "select",
			hasMany: true,
			options: [
				{
					label: "DNI",
					value: "DNI",
				},
				{
					label: "Carnet de Extranjería",
					value: "Carnet de Extranjería",
				},
				{
					label: "Pasaporte",
					value: "Pasaporte",
				},
			],
		},
		{
			name: "identificationDocumentValue",
			label: "Documento de Identificación",
			type: "number",
			unique: true,
		},
		{
			name: "phoneNumber",
			label: "Numero de celular",
			type: "number",
			unique: true,
			required: false
		},
		{
			name: "district",
			label: "Distrito",
			type: "relationship",
			relationTo: "district",
			hasMany: true,
		},
		{
			name: "province",
			label: "Provincia",
			type: "relationship",
			relationTo: "province",
			hasMany: true,
		},
		{
			name: "department",
			label: "Departamento",
			type: "relationship",
			relationTo: "department",
			hasMany: true,
		},
		{
			name: "subscription",
			label: "Subscripción",
			type: "relationship",
			relationTo: "subscription",
			hasMany: true,
		},
		{
			name: "subscriptionStart",
			label: "Fecha de Inicio de la Subscripción",
			type: "date",
			defaultValue: () => new Date().toISOString(),
			admin: {
				readOnly: true,
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
		{
			name: "subscriptionEnd",
			label: "Fecha de Fin de la Subscripción",
			type: "date",
			admin: {
				readOnly: true,
			},
			// defaultValue: ({ context }) => {
			// 	console.log(context)
			//   if (context && context.data && context.data.subscriptionStar && context.data.subscription) {
			// 	return calculateSubscriptionEnd(context.data.subscriptionStar, context.data.subscription)
			//   }
			//   return null
			// },
		},
		{
			name: "subscriptionStatus",
			label: "Estado de Subscripción",
			type: "text",
			admin: {
				readOnly: true,
			},
			defaultValue: "activo",
		},
	],
	// hooks: {
	// 	beforeChange: [
	// 		({ req, data }) => {
	// 			console.log(data)
	// 			if (data.subscriptionStart) {
	// 				console.log(data.subscriptionStart)
	// 				const endDate = new Date(data.subscriptionStart)
	// 				console.log(endDate)
	// 				data.subscriptionEnd = endDate.setMonth(
	// 					endDate.getMonth() + 1
	// 				)
	// 				console.log(data.subscriptionEnd)
	// 			}
	// 		},
	// 	],
	// },
}

const calculateSubscriptionEnd = (subscriptionStar, subscription) => {
	if (subscriptionStar && subscription) {
		const startDate = new Date(subscriptionStar)
		const endDate = new Date(startDate)

		if (subscription === "Plan Mensual") {
			endDate.setMonth(startDate.getMonth() + 1)
		} else if (subscription === "Plan Anual") {
			endDate.setFullYear(startDate.getMonth() + 12)
		}

		return endDate.toISOString()
	}
	return null
}
export default Users
