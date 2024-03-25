import { Access } from "payload/config"

export const isAdmin: Access = ({ req: { user } }) => {
	if (user && user.roles && user.roles.includes("Admin")) {
		return true
	}
	return false
}
