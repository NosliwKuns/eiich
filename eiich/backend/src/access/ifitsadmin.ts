import { Access } from "payload/config";

export const ifitsadmin:Access = ({ req })=> {
    if (req && req.user && req.user.roles && req.user.roles.includes("Admin")) {
        return true;
      }
      return false;
}