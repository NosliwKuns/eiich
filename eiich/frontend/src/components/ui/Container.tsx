import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`xl:container mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
