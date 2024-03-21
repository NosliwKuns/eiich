import { CollectionConfig } from "payload/types"
import Subscription from "./Subcription"
import { timeDate } from "../utils"

const date = timeDate()
const Customer: CollectionConfig = {
	labels: {
		plural: "Clientes",
		singular: "Cliente",
	},
	slug: "customer",
	auth: true,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "email",
			label: "email",
			type: "email",
			required: true,
			unique: true,
		},
		{
			name: "password",
			label: "contraseñas",
			type: "text",
			required: true,
		},
		{
			name: "name",
			label: "Nombres",
			type: "text",
			required: true,
		},
		{
			name: "lastName",
			label: "Apellidos",
			type: "text",
			required: true,
		},
		{
			name: "DateBorn",
			label: "Fecha de Nacimiento",
			type: "date",
			required: true,
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
		{
			name: "IdentificationDocument",
			label: "Seleccionar tipo de documento de identificacion",
			type: "select",
			hasMany: true,
			required: true,
			options: [
				{
					label: "DNI",
					value: "DNI",
				},
				{
					label: "Carnet de extranjeria",
					value: "Carnet de extranjeria",
				},
				{
					label: "Pasaporte",
					value: "Pasaporte",
				},
			],
		},
		{
			name: "documentIdentificationValue",
			label: "Seleccionar tipo de documento de identificacion",
			type: "number",
			required: true,
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
			name: "subscriptionStar",
			type: "date",
			defaultValue: () => new Date().toISOString().substr(0, 10),
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
		{
			name: "subscriptionEnd",
			type: "date",
			/*admin: {
				condition: (_, { context }) => context.record && context.record.subscriptionStar,
				defaultValue: ({ context }) => {
					const subscriptionType = context.record.subscriptionStar
						? context.record.subscriptionStar[0].type
						: null
					if (!subscriptionType) {
						return null // Otra lógica en caso de que el tipo no esté definido
					}

					const startDate = new Date(context.record.subscriptionStar)

					if (subscriptionType === "Plan Mensual") {
						startDate.setMonth(startDate.getMonth() + 1)
					} else if (subscriptionType === "Plan Anual") {
						startDate.setFullYear(startDate.getFullYear() + 1)
					}

					return startDate.toISOString().substr(0, 10)
				},
			},*/
		},
	],
}

export default Customer
