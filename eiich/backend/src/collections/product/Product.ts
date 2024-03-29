import { CollectionConfig } from "payload/types"
import payload from "payload"

const Product: CollectionConfig = {
	labels: {
		plural: "Productos",
		singular: "Producto",
	},
	slug: "product",
	auth: false,
	admin: {
		useAsTitle: "name",
	},
	upload: {
		staticURL: "/media",
		staticDir: "media",
		imageSizes: [
			{
				name: "ImagendeProducto",
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
			name: "name",
			label: "Titulo",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Descripción",
			type: "text",
			required: true,
		},
        {
			name: "price",
			label: "Precio",
			type: "number",
			required: true,
		},
		{
			name: "category",
			label: "Categoria",
			type: "relationship",
			relationTo: "category",
			hasMany: true,
		},
	],
}

export default Product
