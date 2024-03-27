import { Container } from "./ui/Container"

interface props {
	children: React.ReactNode
}

export const Header: React.FC<props> = ({ children }) => {
	return (
		<section className="relative bg-babyBlue pb-8 pt-28 md:pt-36 overflow-hidden">
			<div className="absolute -top-24 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full rounded-full blur-[120px] bg-gradient-to-r from-electric-violet-400 to-magentaPink/40 z-10"></div>
			<Container>{children}</Container>
		</section>
	)
}
