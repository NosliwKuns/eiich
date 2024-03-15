import { Header } from "@/components/Header"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"
// import { FlipClockCountdown } from "./components/chatcito"
import { Buttom } from "@/components/ui/Buttom"

export const Awards = () => {
	return (
		<div className="min-h-[calc(100vh-394px)] pb-8">
			<Header>
				<Typography className="text-center">
					Nuestros premios
				</Typography>
			</Header>
			<Container className="mt-12">
				<div className="grid grid-cols-2 gap-8 text-electric-violet-950">
					<div className="flex flex-col gap-8 bg-babyBlue w-full max-w-[680px] px-10 py-14 rounded-2xl">
						<h6 className="text-2xl text-vividIndigo font-semibold">
							Premio del mes
						</h6>
						<div className="flex flex-col gap-4 px-4 py-8 bg-white w-full rounded-tl-xl rounded-bl-xl ml-auto -mr-12">
							<p className="text-3xl font-bold text-electric-violet-950">
								Mackbook Air
							</p>
							<p>Lun. 22 de Abril</p>
						</div>
						<p>!No te pierdas la oportunidad!</p>
						<p>
							Sólo necesitas adquirir alguno de nuestros planes de
							membresía, que se irán renovando mes a mes
						</p>
						<Buttom className="w-full text-center py-4 items-end">
							Suscribirme ahora
						</Buttom>
					</div>
					<div
						className="rounded-2xl p-0 bg-cover bg-center h-full relative overflow-hidden aspect-[1/1.2]"
						style={{
							backgroundImage:
								"url(https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&quot)",
						}}
					>
						<div
							className="absolute inset-0"
							style={{
								backgroundImage:
									"linear-gradient(transparent 0%, rgb(109, 16, 185) 100%)",
							}}
						>
							<div className="h-full flex">
								<div
									className="leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight"
									style={{ color: "rgb(250, 244, 255)" }}
								>
									{" "}
									Create<br></br>{" "}
									<span
										style={{ color: "rgb(233, 208, 255)" }}
									>
										color scales<br></br>
									</span>{" "}
									in seconds.{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 mt-10">
					<p className="text-3xl text-center font-semibold text-electric-violet-950">
						Próxima edición
					</p>
					<FlipClockCountdown
						to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
						labels={["Días", "Horas", "MINUTOS", "SEGUNDOS"]}
						labelStyle={{
							fontSize: 10,
							fontWeight: 500,
							textTransform: "uppercase",
							color: "black",
						}}
						digitBlockStyle={{
							width: 60,
							height: 80,
							fontSize: 40,
							background: "#a841ff",
						}}
						dividerStyle={{ color: "white", height: 1 }}
						separatorStyle={{ color: "#a841ff", size: "6px" }}
						duration={0.5}
						className="w-fit mx-auto"
					/>
				</div>
			</Container>
		</div>
	)
}
