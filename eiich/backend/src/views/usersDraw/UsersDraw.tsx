import React, { useState, useEffect } from 'react'
import './users-draw.css'
import { Button } from "payload/components/elements"

export const UsersDraw: React.FC = () => {

  const currentUrl = window.location.href
  const urlParts = currentUrl.split('/')
  const id = urlParts[urlParts.length - 1]

  console.log(id);

  const [userId, setUserId] = useState('')
  const [users, setUsers] = useState([])

  const usuariosActivos = async () => {
    try {
      const response = await fetch(`/api/Draw/getUsersByDrawId/${id}`); // Reemplaza '/api/getUsersByDrawId/${userId}' con la ruta correcta de tu API
      const responseData = await response.json()
      console.log(responseData);
      setUsers(responseData);
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    usuariosActivos()
  }, [])
  return (
    <div>
      <div>
      <Button el="link" to={`/admin/collections/draw`}>Regresar</Button>
          <div>
            <table className='lista'>
              <thead>
                <tr>
                  <td scope="col">N</td>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Celular</th>
                  <th scope="col">DNI</th>
                </tr>
              </thead>
              {users.map((user, index) => (
              <tbody>
                <tr key={index}>
                  <th>{index+1}</th>
                  <th>{user.name}</th>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.identificationDocumentValue}</td>
                </tr>
              </tbody>
              ))}
            </table>
          </div>
      </div>
    </div>
  );
};
