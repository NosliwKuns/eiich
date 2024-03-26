import { FC } from "react"
import { NavLink } from "react-router-dom"

const links = [
	{ id: "1", path: "/", title: "Inicio" },
	{ id: "2", path: "/beneficios", title: "Beneficios" },
	{ id: "3", path: "/premios", title: "Premios" },
	{ id: "4", path: "/ganadores", title: "Ganadores" },
]

interface Props {
	isMovil?: boolean
}

export const NavLinks: FC<Props> = ({ isMovil = false }) => {
	if (isMovil) {
		return (
			<ul className="flex flex-col gap-2 font-semibold text-sm">
				{links.map((link) => (
					<li key={link.id}>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								`${isActive && "text-vividIndigo"} relative cursor-pointer hover:text-vividIndigo`
							}
						>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		)
	} else {
		return (
			<ul className="hidden lg:flex gap-8 font-semibold text-sm">
				{links.map((link) => (
					<li key={link.id}>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								`${isActive && "text-vividIndigo"} group relative cursor-pointer hover:text-vividIndigo`
							}
						>
							{({ isActive }) => (
								<>
									{link.title}
									<span className="absolute top-1/2 left-0 w-full h-full"></span>
									<span
										className={` ${
											isActive && "bg-vividIndigo/80"
										} absolute bottom-[-5px] left-0 w-full h-1 rounded-full group-hover:bg-vividIndigo/80 transition-colors`}
									></span>
								</>
							)}
						</NavLink>
					</li>
				))}
			</ul>
		)
	}
}
