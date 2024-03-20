import path from "path"

import { payloadCloud } from "@payloadcms/plugin-cloud"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { slateEditor } from "@payloadcms/richtext-slate"
import { buildConfig } from "payload/config"

import Users from "./collections/Users"
import Subscription from "./collections/Subcription"
import Customer from "./collections/Customer"
import Provincia from "./collections/location/Provincia"
import Distrito from "./collections/location/Distrito"
import Departamento from "./collections/location/departamento"

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [Users, Subscription, Customer, Departamento, Provincia, Distrito],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
