import { CollectionConfig } from "payload/types"

const Prueba: CollectionConfig = {
	slug: "prueba",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "id",
			type: "number",
			required: true,
		},
		{
			name: "selectedSubscription",
			type: "select",
			hasMany: true,
			options: [
				{
					label: "Month Subscription",
					value: "month_subscription",
				},
				{
					label: "Year Subscription",
					value: "year_subscription",
				},
			],
		},
		{
			name: "fechaInicio",
			type: "date",
			defaultValue: ({ values }) =>
				generateDates(
					values.selectedSubscription
				).fechaInicio.toISOString(), // Generar fechaInicio automáticamente
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
		{
			name: "fechaFin",
			type: "date",
			defaultValue: ({ values }) =>
				generateDates(
					values.selectedSubscription
				).fechaFin.toISOString(), // Generar fechaFin automáticamente
			admin: {
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "d MMM yyy",
				},
			},
		},
	],
}

const generateDates = (selectedSubscription: string) => {
	const now = new Date()
	let fechaInicio: Date
	let fechaFin: Date

	if (selectedSubscription === "month_subscription") {
		// Si es suscripción mensual, se toma la hora actual y se suman 30 días
		fechaInicio = now
		fechaFin = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000) // Sumar 30 días
	} else if (selectedSubscription === "year_subscription") {
		// Si es suscripción anual, se toma la hora actual y se suman 365 días
		fechaInicio = now
		fechaFin = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000) // Sumar 365 días
	} else {
		// Por defecto, si no se selecciona ninguna opción válida, se establece como hoy y mañana
		fechaInicio = now
		fechaFin = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000) // Sumar 1 día
	}

	return { fechaInicio, fechaFin }
}

export default Prueba
