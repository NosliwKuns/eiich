import { CollectionConfig } from "payload/types"

const Subscription: CollectionConfig = {
	slug: "subscription",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "selectedSubscription", // required
			type: "select", // required
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
			type: "number",
		},
		{
			name: "durationMonth",
			type: "number",
			admin: {
				condition: (data) => {
					//console.log(data.selectedSubscription)
					if (data.selectedSubscription && data.selectedSubscription.includes("Plan Mensual")) {
						data.durationMonth = 1
						data.valueToPay = 10

						return true
					} else {
						data.durationMonth = 12
						data.valueToPay = 100
						return false
					}
				},
			},
		},
		{
			name: "selectedTypeMoney", // required
			type: "select", // required
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
			type: "text",
		},
		{
			name: "moneyType",
			type: "text",
			admin: {
				condition: (data) => {
					console.log(data.selectedTypeMoney)
					if (data.selectedTypeMoney.includes("Dolares")) {
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
			type: "text",
			required: true,
		},
	],
}

export default Subscription
