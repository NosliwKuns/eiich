export const EditData = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <div className="flex gap-4 mb-8">
        <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-2xl focus:outline-none">
          Mis Datos
        </button>
        <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-2xl focus:outline-none">
          Suscripción
        </button>
      </div>
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Nombre:</h2>
          <h3>Fernando</h3>
          <hr className="my-2" />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Apellido:</h2>
          <h3>preubaaaaa</h3>
          <hr className="my-2" />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Número de Celular:</h2>
          <h3>968574123</h3>
          <hr className="my-2" />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Email:</h2>
          <h3>efe@gmail.com</h3>
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none mt-2">
            Actualizar contraseña
          </button>
          <hr className="my-2" />
        </div>
      </div>
    </div>
  );
};
