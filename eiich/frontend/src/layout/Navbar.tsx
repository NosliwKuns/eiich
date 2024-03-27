import { NavLinks } from "@/components/NavLinks"
import { Buttom } from "@/components/ui/Buttom"
import { Container } from "@/components/ui/Container"
import { useEffect, useState } from "react"

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [isOpened, setIsOpened] = useState(false)

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

	const handleOnBlur = () => {
		setIsOpened(false)
	}

	const handleOnClick = () => {
		if (!isOpened) {
			setIsOpened(true)
		} else {
			setIsOpened(false)
		}
	}

	return (
		<header
			className={`fixed w-full z-[999] transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}
		>
			<Container>
				<nav className="relative flex items-center justify-between py-4 text-electric-violet-950">
					<h1 className="text-5xl">Eiich</h1>

					<NavLinks />

					<Buttom to="/iniciar-sesion" className="hidden lg:block px-6 py-3">
						Iniciar Sesión
					</Buttom>
					<button
						onBlur={handleOnBlur}
						onClick={handleOnClick}
						className={`relative h-10 ${
							isOpened ? "px-2" : ""
						} w-10 flex flex-col gap-2 justify-center aspect-square transition-all`}
					>
						<span
							className={`${
								isOpened && "rotate-[45deg] w-[38px]"
							} origin-left bg-electric-violet-950 block w-full h-[5px] rounded-full transition-transform`}
						></span>
						<span
							className={`bg-electric-violet-950 block ${
								isOpened ? "w-1" : "w-full"
							} h-[5px] rounded-full mx-auto transition-all`}
						></span>
						<span
							className={`${
								isOpened && "-rotate-[45deg] w-[38px]"
							} origin-left bg-electric-violet-950 block w-full h-[5px] rounded-full transition-transform`}
						></span>
					</button>
					<div
						className={`${
							isOpened ? "h-36 border border-electric-violet-500" : "h-0"
						} absolute right-0 bottom-0 lg:hidden translate-y-[100%] shadow-xl bg-white rounded-lg overflow-hidden transition-all duration-300`}
					>
						<div className="p-4">
							<NavLinks isMovil />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}
