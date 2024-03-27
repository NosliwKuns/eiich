import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  value?: string;
}

export const Card: React.FC<Props> = ({ children, className = "", value }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[350px] ${className} transform transition-transform hover:scale-105 min-h-[500px]`}>
      <div className="relative px-5 py-4">
        <img
          src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2023/06/Precio-de-las-Apple-Vision-Pro.jpg"
          alt="sorteo"
          className="mt-4 w-full rounded-2xl aspect-square object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white r p-3 w-36 flex items-center justify-center rounded-t-lg ">
          <h1 className="text-xl font-bold text-magentaPink">{value}</h1>
        </div>
      </div>
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};
