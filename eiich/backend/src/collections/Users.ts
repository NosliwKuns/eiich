import { CollectionConfig } from "payload/types"

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
	fields: [
		// Email added by default
		// Add more fields as needed
	],
}

export default Users
