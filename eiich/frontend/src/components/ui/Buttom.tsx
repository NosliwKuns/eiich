import { ReactNode } from "react"

interface Props {
	children: ReactNode
	className?: string
}

export const Buttom: React.FC<Props> = ({ children, className = "" }) => {
	return (
		<a
			href="#_"
			className={`relative w-fit rounded-full group font-medium text-white text-sm inline-block ${className}`}
		>
			<span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-electricPurple to-vividIndigo"></span>
			<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-electricPurple to-skyBlue"></span>
			<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-full bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-electricPurple to-vividIndigo"></span>
			<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-electricPurple from-vividIndigo"></span>
			<span className="relative">{children}</span>
		</a>
	)
}
