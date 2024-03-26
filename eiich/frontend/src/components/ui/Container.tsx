import { ReactNode } from "react";

interface Props {
  children: ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  )
}
