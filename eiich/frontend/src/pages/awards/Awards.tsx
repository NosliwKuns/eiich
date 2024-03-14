import { Header } from "@/components/Header"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"

export const Awards = () => {
	return (
		<div className="min-h-[calc(100vh-394px)] pb-8">
			<Header>
				<Typography className="text-center">
					Nuestros premios
				</Typography>
			</Header>
			<Container className="mt-12">
				{/* <Typography className="text-2xl font-semibold mb-4">
					Premio del Mes
				</Typography>
				<Typography className="text-lg mb-4">
					¡No te pierdas la oportunidad de ganar!
				</Typography>

				<div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md mb-4">
					<img
						src="/ruta-de-la-imagen.jpg"
						alt="Premio del Mes"
						className="w-24 h-24 rounded-full mb-2"
					/>
					<Typography className="text-lg font-semibold mb-2">
						Título del Premio
					</Typography>
					<Typography className="text-base mb-2">
						Fecha del Sorteo: 28 de Febrero, 2024
					</Typography>
				</div> */}
				<div className="grid grid-cols-2 gap-8">
					<div className="bg-babyBlue w-full max-w-[680px] px-10 py-14">
						<h6>Premio del mes</h6>
						<div className="bg-white max-w-[100%] rounded-tl-xl rounded-bl-xl ml-auto -mr-12">
							<p>Mackbook Air</p>
							<p>Próximo sorteo 30 de Mayo</p>
						</div>
					</div>
					<div>a</div>
				</div>

				<FlipClockCountdown
					to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
					labels={["Días", "Horas", "Minutos", "Segundos"]}
					labelStyle={{
						fontSize: 14,
						fontWeight: 600,
						textTransform: "uppercase",
						color: "black",
					}}
					digitBlockStyle={{
						display: "flex",
						background: "#820de7",
						width: "7vw",
						maxWidth: "85px",
						aspectRatio: "1/1.6",
						height: "100%",
						fontSize: "min(6vw, 5.3rem)",
					}}
					dividerStyle={{ color: "white", height: 1 }}
					separatorStyle={{ color: "#820de7", size: "6px" }}
					duration={0.5}
					className="flex items-center justify-center font-semibold mt-8"
				/>
			</Container>
		</div>
	)
}
