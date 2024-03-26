import { IoIosArrowDown } from "react-icons/io";

const months: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
export const SelectMonth = () => {
  return (
    <div className="relative w-fit m-8">
      <select
        name=""
        id=""
        className="bg-black text-white rounded-lg w-64 h-8 px-4 appearance-none top-10"
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <IoIosArrowDown color="white" className="absolute top-2 right-3" />
    </div>
  );
};
