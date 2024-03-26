import React from 'react'
import { Button } from "payload/components/elements"
import { useDocumentInfo } from 'payload/components/utilities'



export const LinkUsersDraw: React.FC = () => {
    const { id } = useDocumentInfo()

    if (!id) {
        return null
    }
  return (
    <Button el="link" to={`/admin/users-draw/${id}`}>Participantes</Button>
  )
}