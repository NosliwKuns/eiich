import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
	children: ReactNode
	className?: string
	to?: string
	type?: "submit" | "reset" | "button"
	onClick?: () => void
}

export const Buttom: React.FC<Props> = ({ children, className = "", to = "#", type, onClick }) => {
	if (!type) {
		return (
			<Link
				to={to}
				className={`relative w-fit rounded-lg group font-medium text-white text-sm inline-block ${className}`}
			>
				<span className="absolute top-0 left-0 w-full h-full rounded-lg opacity-50 filter blur-sm bg-gradient-to-br from-electricPurple to-vividIndigo"></span>
				<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-lg opacity-50 from-electricPurple to-skyBlue"></span>
				<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-lg shadow-full bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-electricPurple to-vividIndigo"></span>
				<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-lg bg-gradient-to-br to-electric-violet-500 from-vividIndigo"></span>
				<span className="relative">{children}</span>
			</Link>
		)
	} else {
		return (
			<button
				type={type}
				onClick={onClick}
				className={`relative w-fit rounded-lg group font-medium text-white text-sm inline-block ${className}`}
			>
				<span className="absolute top-0 left-0 w-full h-full rounded-lg opacity-50 filter blur-sm bg-gradient-to-br from-electricPurple to-vividIndigo"></span>
				<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-lg opacity-50 from-electricPurple to-skyBlue"></span>
				<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-lg shadow-full bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-electricPurple to-vividIndigo"></span>
				<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-lg bg-gradient-to-br to-electric-violet-500 from-vividIndigo"></span>
				<span className="relative">{children}</span>
			</button>
		)
	}
}
