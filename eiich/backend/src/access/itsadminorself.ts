import { Access } from "payload/config";

export const itsadminorself:Access = ({ req: {user} })=> {
    if (user){
        if (user.roles.includes("Admin")) {
            return true;
          }
        return {
            id: {
                equals: user.id
            }
        }
    }
    return false
}