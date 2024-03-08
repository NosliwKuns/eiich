import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Buttom: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    // <button className={`bg-gradient-to-r from-electricPurple to-vividIndigo inline-block w-fit text-white text-sm rounded-2xl ${className}`}>
    //   {children}
    // </button>
    <a href="#_" className={`relative w-fit rounded-2xl group font-medium text-white text-sm inline-block ${className}`}>
      <span className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-50 filter blur-sm bg-gradient-to-br from-electricPurple to-vividIndigo"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-2xl opacity-50 from-electricPurple to-skyBlue"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-2xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-electricPurple to-vividIndigo"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-2xl bg-gradient-to-br to-electricPurple from-vividIndigo"></span>
      <span className="relative">{children}</span>
    </a>
  )
}