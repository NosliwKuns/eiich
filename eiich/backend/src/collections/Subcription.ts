import { CollectionConfig } from "payload/types"

const Subscription: CollectionConfig = {
	labels: {
		plural: "Subscripciones",
		singular: "Subscripción",
	},
	slug: "subscription",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			label: "Tipo de Subscripción",
			type: "text",
			admin: {
				readOnly: true,
				condition: (data) => {
					if (data.selectSubscription && data.selectSubscription.includes("Plan Mensual")) {
						data.name = "Plan Mensual"
						return true
					}
					if (data.selectSubscription && data.selectSubscription.includes("Plan Anual")) {
						data.name = "Plan Anual"
						return true
					} else {
						return false
					}
				},
			},
		},
		{
			name: "selectSubscription",
			label: "Seleccionar tipo de subscripción",
			type: "select",
			hasMany: true,
			unique: true,
			required: true,
			options: [
				{
					label: "Plan Mensual",
					value: "Plan Mensual",
				},
				{
					label: "Plan Anual",
					value: "Plan Anual",
				},
			],
		},
		{
			name: "valueToPay",
			label: "Valor a Pagar",
			type: "number",
			admin: {
				readOnly: false,
			},
		},
		{
			name: "durationMonth",
			label: "Duracion en Meses",
			type: "number",
			admin: {
				readOnly: true,
				condition: (data) => {
					if (data.selectSubscription && data.selectSubscription.includes("Plan Mensual")) {
						data.durationMonth = 1
						return true
					}
					if (data.selectSubscription && data.selectSubscription.includes("Plan Anual")) {
						data.durationMonth = 12
						return true
					} else {
						return false
					}
				},
			},
		},
		{
			name: "selectedTypeMoney",
			label: "Seleccionar tipo de moneda",
			type: "select",
			hasMany: true,
			required: true,
			options: [
				{
					label: "Dolares",
					value: "Dolares",
				},
				{
					label: "Soles",
					value: "Soles",
				},
			],
		},
		{
			name: "symbolMoney",
			label: "Simbolo de moneda",
			type: "text",
			admin: {
				readOnly: true,
				condition: (data) => {
					console.log(data.selectedTypeMoney)
					if (data.selectedTypeMoney && data.selectedTypeMoney.includes("Dolares")) {
						data.symbolMoney = "$"
						return true
					} else {
						data.symbolMoney = "S/"
						return false
					}
				},
			},
		},
		{
			name: "content",
			label: "Contenido",
			type: "text",
			required: true,
		},
	],
}

export default Subscription
