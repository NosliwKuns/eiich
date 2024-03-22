import { ReactNode } from "react"
import styles from "@/components/styles/typography.module.css"

interface Props {
  children: ReactNode
  className?: string
  text?: string
}

export const Typography: React.FC<Props> = ({ children, className = "", text = "text-5xl" }) => {
  return (
		<h2
			className={`${styles.mainText} font-bold ${text} italic leading-tight ${className}`}
		>
			{children}
		</h2>
  )
}