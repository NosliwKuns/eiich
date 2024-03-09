import { ReactNode } from "react"
import styles from "@/components/styles/typography.module.css"

interface Props {
  children: ReactNode
  className?: string
}

export const Typography: React.FC<Props> = ({ children, className }) => {
  return (
    <h2 className={`${styles.mainText} font-bold text-5xl italic ${className}`}>
      { children }
    </h2>
  )
}