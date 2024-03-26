import Home from "@/pages/Home/Home"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
	useLocation,
} from "react-router-dom"
import { Navbar } from "./layout/Navbar"
import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"
import { Footer } from "./layout/Footer"
import { Benefits } from "./pages/benefits/Benefits"
import { Awards } from "./pages/awards/Awards"
import { Winners } from "./pages/winners/Winners"
import { Profile } from "./pages/profile/Profile"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/register/Register"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/beneficios" element={<Benefits />} />
				<Route path="/premios" element={<Awards />} />
				<Route path="/ganadores" element={<Winners />} />
				<Route path="/iniciar-sesion" element={<Login />} />
				<Route path="/registro" element={<Register />} />
				<Route path="/perfil" element={<Profile />} />
			</Route>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App

const Root = () => {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	const { pathname } = useLocation()

	const isAuthPage = pathname === "/iniciar-sesion" || pathname === "/registro"

	return (
		<>
			{!isAuthPage && <Navbar />}
			<main>
				<Outlet />
			</main>
			{!isAuthPage && <Footer />}
		</>
	)
}
