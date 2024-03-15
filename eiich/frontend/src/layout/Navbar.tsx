import { Buttom } from "@/components/ui/Buttom"
import { Container } from "@/components/ui/Container"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20
			setScrolled(isScrolled)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const links = [
		{ id: "1", path: "/", title: "Inicio" },
		{ id: "2", path: "/beneficios", title: "Beneficios" },
		{ id: "3", path: "/premios", title: "Premios" },
		{ id: "4", path: "/ganadores", title: "Ganadores" }
	]

	return (
		<header
			className={`fixed w-full z-[999] transition-all duration-300 ${
				scrolled ? "bg-white" : "bg-transparent"
			}`}
		>
			<Container>
				<nav className="flex items-center justify-between py-4 text-electric-violet-950">
					<h1 className="text-5xl">Eiich</h1>
					<ul className="flex gap-8 font-semibold text-sm">
						{links.map((link) => (
							<li key={link.id}>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										`${
											isActive && "text-vividIndigo"
										} group relative cursor-pointer hover:text-vividIndigo`
									}
								>
									{({ isActive }) => (
										<>
											{link.title}
											<span className="absolute top-1/2 left-0 w-full h-full"></span>
											<span
												className={` ${
													isActive &&
													"bg-vividIndigo/80"
												} absolute bottom-[-5px] left-0 w-full h-1 rounded-full group-hover:bg-vividIndigo/80 transition-colors`}
											></span>
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>
					<Buttom to="/iniciar-sesion" className="px-6 py-3">Iniciar Sesión</Buttom>
				</nav>
			</Container>
		</header>
	)
}
