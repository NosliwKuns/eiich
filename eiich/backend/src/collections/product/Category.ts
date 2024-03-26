import { CollectionConfig } from "payload/types"
import payload from "payload"

const Category: CollectionConfig = {
	labels: {
		plural: "Categorias",
		singular: "Categoria",
	},
	slug: "category",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			label: "Nombre",
			type: "text",
			required: true,
		},
	],
}

export default Category
