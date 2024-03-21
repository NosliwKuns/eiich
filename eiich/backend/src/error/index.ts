import { APIError } from "payload/errors";

class CustomAdminError extends APIError {
  constructor(message: string, statusCode: number) {
    super(message, statusCode)
  }
}
export default CustomAdminError;