const hiddenNumber = (dni:number) => {
  const dniStr = dni.toString();
  let result = "";

  for (let i = 0; i < dniStr.length; i++) {
    if (i < 4) {
      result += dniStr[i];
    } else {
      result += "*";
    }
  }

  return result;
};


export const Winner = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[410px] group">
      <div className="px-8 py-6">
        <h1 className="text-xl font-bold text-center text-magentaPink">
          03/Marzo
        </h1>
        <img
          src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2023/06/Precio-de-las-Apple-Vision-Pro.jpg"
          alt="sorteo"
          className="mt-4 w-full rounded-2xl aspect-square object-cover"
        />
        <p className="mt-4 text-gray-800 text-center">Jesús Rosado Aguirre</p>
        <div className="mt-2">
          <p className="text-gray-600">DNI:</p>
          <h2 className="text-lg font-semibold text-center">
            {hiddenNumber(74687417)}
          </h2>
        </div>
      </div>
    </div>
  );
};
