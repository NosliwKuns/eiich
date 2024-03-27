import React, { useState } from "react";
import { Buttom } from "../../../components/ui/Buttom"

export const EditData = () => {
  const [showEditData, setShowEditData] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const handleEditDataClick = () => {
    setShowEditData(true);
    setEditMode(true);
  };

  const handleSubscriptionClick = () => {
    setShowEditData(false);
    setEditMode(false);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className={`py-2 px-4 ${
            showEditData ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 rounded-tl-lg rounded-tr-lg focus:outline-none`}
          onClick={handleEditDataClick}
        >
          Mis Datos
        </button>
        <button
          className={`py-2 px-4 ${
            !showEditData ? "bg-gray-300" : "bg-gray-200"
          } hover:bg-gray-300 rounded-tr-lg rounded-tl-lg focus:outline-none`}
          onClick={handleSubscriptionClick}
        >
          Suscripción
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-2xl">
        <div className="p-8">
          {showEditData ? (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Información Personal</h2>
                <div className="mb-2">
                  <h3>Nombre:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="Fernando"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>Fernando</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Apellido:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="preubaaaaa"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>preubaaaaa</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Documento de Identidad:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="74687417"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>74687417</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Fecha de Nacimiento:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="20/09/2004"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>20/09/2004</p>
                  )}
                </div>
                <hr className="my-4" />
                <h2 className="text-lg font-semibold">Ubicación</h2>
                <div className="mb-2">
                  <h3>Distrito:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="..."
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>...</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Provincia:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="..."
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>...</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Departamento:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="..."
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>...</p>
                  )}
                </div>
                <hr className="my-4" />
                <h2 className="text-lg font-semibold">Contacto</h2>
                <div className="mb-2">
                  <h3>Número de Celular:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="..."
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>...</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Email:</h3>
                  {editMode ? (
                    <input
                      type="text"
                      defaultValue="efe@gmail.com"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>efe@gmail.com</p>
                  )}
                </div>
                <div className="mb-2">
                  <h3>Contraseña:</h3>
                  {editMode ? (
                    <input
                      type="password"
                      defaultValue="******"
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <p>*******</p>
                  )}
                </div>
              </div>
              {editMode ? (
                <div className="flex justify-end gap-4">
                  <Buttom
                    type="button"
                    className="py-2 px-4"
                    onClick={handleSaveClick}
                  >
                    Guardar
                  </Buttom>
                  <button
                    className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={handleCancelClick}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <Buttom
                  type="button"
                  className="py-2 px-4"
                  onClick={handleEditDataClick}
                >
                  Editar
                </Buttom>
              )}
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold">Suscripcion</h2>
              <div className="mb-2">
                <h3>Tipo de Suscripcion</h3>
                <p>Mensual</p>
              </div>
              <div className="mb-2">
                <h3>Fecha de Inicio</h3>
                <p>27/03/2024</p>
              </div>
              <div className="mb-2">
                <h3>Fecha de Fin</h3>
                <p>27/04/2024</p>
              </div>
              <div className="flex justify-end">
                  <Buttom
                    type="button"
                    className="py-2 px-4"
                    onClick={handleSaveClick}
                  >
                    Actulizar suscripcion
                  </Buttom>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
