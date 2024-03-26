import { Request, Response } from "express"
import payload from "payload"



 export const getUsersByDrawId = async (req:Request, res:Response) => {
        try {
            const { params } = req
            const result = await payload.findByID({
                collection: "draw", // required
                id: params.id, // required
            })
            if (Array.isArray(result.users)) {
                // Verifica si result.users es un array
                const usersData = result.users.map((user) => ({
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    identificationDocumentValue:
                        user.identificationDocumentValue,
                }))
                return res.json(usersData)
            } else {
                return res.json([]) // O devuelve un array vacío si no hay usuarios
            }
        } catch (error) {
            return res.status(403).send(error)
        }
}

