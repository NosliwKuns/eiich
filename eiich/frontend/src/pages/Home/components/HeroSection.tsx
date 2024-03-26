import styles from "@/pages/Home/styles/hero-section.module.css"
import { useEffect, useRef } from "react"
import Goo from "gooey-react"
import { Container } from "@/components/ui/Container"
import { camara, celular, lavadora, microondas, refrigeradora } from "@/assets"
import { Buttom } from "@/components/ui/Buttom"
import { Typography } from "@/components/ui/Typography"

export const HeroSection = () => {
	const interBubbleRef = useRef<HTMLDivElement>(null)
	const parallaxRef = useRef<HTMLDivElement>(null)
	const fridgeRef = useRef<HTMLImageElement>(null)
	const washMachRef = useRef<HTMLImageElement>(null)
	const phoneRef = useRef<HTMLImageElement>(null)
	const microoRef = useRef<HTMLImageElement>(null)
	const cameraRef = useRef<HTMLImageElement>(null)
	const curX = useRef(0)
	const curY = useRef(0)
	const tgX = useRef(0)
	const tgY = useRef(0)
	const parX = useRef(0)
	const parY = useRef(0)

	const sFridge = 500
	const sWashMach = 400
	const sPhone = 300
	const sMicroo = 200
	const sCamera = 100

	useEffect(() => {
		const interBubble = interBubbleRef.current
		const parallax = parallaxRef.current
		const fridge = fridgeRef.current
		const washMach = washMachRef.current
		const phone = phoneRef.current
		const camera = cameraRef.current
		const microo = microoRef.current

		if (!interBubble) {
			return
		}

		function move() {
			curX.current += (tgX.current - curX.current) / 20
			curY.current += (tgY.current - curY.current) / 20
			interBubble!.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
			requestAnimationFrame(move)
		}

		const handleMouseMove = (event: MouseEvent) => {
			tgX.current = event.clientX
			tgY.current = event.clientY
		}

		const handleParallaxMove = (event: MouseEvent) => {
			parX.current = event.clientX
			parY.current = event.clientY

			fridge!.style.transform = `translate(${-35 - Math.round(parX.current) / sFridge}%, ${
				-50 - Math.round(parY.current) / sFridge
			}% )`

			washMach!.style.transform = `translate(${-84 + Math.round(parX.current) / sWashMach}%, ${
				-30 + Math.round(parY.current) / sWashMach
			}% )`

			phone!.style.transform = `translate(${-55 - Math.round(parX.current) / sPhone}%, ${
				-20 - Math.round(parY.current) / sPhone
			}% )`

			microo!.style.transform = `translate(${-26 + Math.round(parX.current) / sMicroo}%, ${
				10 + Math.round(parY.current) / sMicroo
			}% )`

			camera!.style.transform = `translate(${-82.5 + Math.round(parX.current) / sCamera}%, ${
				20 + Math.round(parY.current) / sCamera
			}% )`
		}

		window.addEventListener("mousemove", handleMouseMove)

		parallax!.addEventListener("mousemove", handleParallaxMove)

		move()

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
			parallax!.removeEventListener("mousemove", handleParallaxMove)
		}
	}, [interBubbleRef, tgX, tgY, parallaxRef, cameraRef, parX, parY])
	return (
		<section ref={parallaxRef} className="lg:h-screen lg:max-h-[800px] overflow-hidden relative">
			<Container className="grid lg:grid-cols-2 z-10 relative h-full">
				<div className="flex flex-col justify-center pt-28 gap-8 md:px-28 lg:pl-20 lg:pr-16 border border-red-500">
					<Typography className="text-center lg:text-start">Ganar nunca fue tan fácil</Typography>
					<p className="text-sm font-normal text-center lg:text-start">
						<span>
							Únete a nosotros y descubre cómo puedes convertirte en uno de nuestros afortunados
							ganadores.
						</span>
						<br />
						<span>¿Qué esperas para inscribirte? Aprovecha los beneficios exclusivos que tenemos.</span>
					</p>
					<Buttom to="/registro" className="px-10 py-4 mx-auto lg:mx-0">
						Quiero ser suscriptor
					</Buttom>
				</div>
				<div className="w-full relative aspect-square my-auto">
					<img
						ref={fridgeRef}
						className="absolute w-[90%] z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-[35%]"
						src={refrigeradora}
						alt="refrigeradora"
					/>
					<img
						ref={washMachRef}
						className="absolute w-[50%] z-20 top-1/2 left-1/2 -translate-x-[84%] -translate-y-[30%]"
						src={lavadora}
						alt="lavadora"
					/>
					<img
						ref={phoneRef}
						className="absolute w-[40%] z-30 top-1/2 left-1/2 -translate-x-[55%] -translate-y-[20%]"
						src={celular}
						alt="celular"
					/>
					<img
						ref={microoRef}
						className="absolute w-[60%] z-40 top-1/2 left-1/2 -translate-x-[26%] -translate-y-[-10%] drop-shadow-2xl"
						src={microondas}
						alt="microondas"
					/>
					<img
						ref={cameraRef}
						className="absolute w-[55%] z-50 top-1/2 left-1/2 -translate-x-[82.5%] -translate-y-[-20%] drop-shadow-2xl"
						src={camara}
						alt="camara"
					/>
				</div>
			</Container>

			<div className={`${styles.gradientsContainer} w-full h-full absolute top-0 overflow-hidden`}>
				<Goo className="w-full h-full" intensity="strong">
					<div className={`${styles.g1} absolute opacity-100`}></div>
					<div className={`${styles.g2} absolute opacity-100`}></div>
					<div className={`${styles.g3} absolute opacity-100`}></div>
					<div className={`${styles.g4} absolute opacity-100`}></div>
					<div className={`${styles.g5} absolute opacity-100`}></div>
					<div ref={interBubbleRef} className={`${styles.interactive} absolute opacity-100`}></div>
				</Goo>
			</div>
		</section>
	)
}
