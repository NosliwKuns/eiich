import Home from "@/pages/Home/Home"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider
} from "react-router-dom"
import { Navbar } from "./layout/Navbar"
import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"
import { Footer } from "./layout/Footer"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				""
				{/* <Route path="about" element={<About />} /> */}
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

	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
