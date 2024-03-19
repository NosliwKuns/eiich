import { CollectionConfig } from "payload/types"
import Subscription from "./Subcription"
import { timeDate } from "../utils"

const date = timeDate()
const Customer: CollectionConfig = {
	slug: "customer",
	auth: true,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "lastName",
			type: "text",
			required: true,
		},
		{
			name: "DateBorn",
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
			name: "dni",
			type: "text",
			required: true,
		},
		{
			name: "email",
			type: "email",
			required: true,
			unique: true,
		},
		{
			name: "password",
			type: "text",
			required: true,
		},
		{
			name: "distrito",
			type: "text",
			required: true,
		},
		{
			name: "provincia",
			type: "text",
			required: true,
		},
		{
			name: "departamento",
			type: "text",
			required: true,
		},
		{
			name: "subscriptionStar",
			type: "date",
			defaultValue: date,
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
		},
		{
			name: "subscription",
			type: "relationship",
			relationTo: "subscription",
			hasMany: false,
			access: {
				read: async ({ req, data }) => {
					console.log(data)
                    if (data.subscription) {
                        const subs = await req.payload.find({
                            collection: "subscription",
                            where: {
                                _id: {
                                    equals: data.subscription,
                                },
                            },
                        })
                        console.log(subs.docs[0])
                    }
					return true
				},
			},
			/*admin: {
				condition: (data) => {
					console.log(data)
					return true
				},
			},*/
		},
	],
}

export default Customer
