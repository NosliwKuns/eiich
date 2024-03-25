import React, { useState } from 'react';
import { useConfig } from 'payload/components/utilities';
import payload from 'payload';
import './CustomMinimalView.css';

const CustomMinimalView: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);

  const usuariosActivos = async () => {
    try {
      const response = await fetch(`/api/Draw/getUsersByDrawId/${userId}`); // Reemplaza '/api/getUsersByDrawId/${userId}' con la ruta correcta de tu API
      const responseData = await response.json()
      setUsers(responseData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={usuariosActivos}>Buscar</button>
      <div className="lista">
          <div>
            <table>
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

export default CustomMinimalView;
