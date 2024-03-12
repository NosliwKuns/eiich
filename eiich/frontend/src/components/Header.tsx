import { Container } from "./ui/Container"

interface props {
	children: string
}

export const Header: React.FC<props> = ({ children }) => {
	return (
		<section className="relative bg-babyBlue pb-6 pt-28 overflow-hidden">
			<div className="absolute -top-10 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-gradient-to-r from-electricPurple/70 to-magentaPink/40 z-10"></div>
			<Container>
				<h2 className="relative text-[2.5rem] text-center font-bold italic text-vividIndigo px-40 leading-tight z-20">
					{children}
				</h2>
			</Container>
		</section>
	)
}
