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
			name: "durationDays",
			type: "number",
			admin: {
				condition: (data) => {
					if (data.selectedSubscription === "month_subscription") {
						data.durationDays = 30
						return true
					} else {
						data.durationDays = 365
						return false
					}
				},
			},
		},
	],
}

export default Subscription
