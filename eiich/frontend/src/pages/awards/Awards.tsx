import { Header } from "@/components/Header"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { CountdownTimer } from "./components/CountdownTimer"

export const Awards = () => {
	return (
		<div className="min-h-[calc(100vh-394px)] pb-8">
			<Header>
				<Typography className="text-center">
					Nuestros premios
				</Typography>
			</Header>
			<Container className="mt-12">
				<Typography className="text-2xl font-semibold mb-4">
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
				</div>

				<CountdownTimer targetDate="15/03/2024" />
			</Container>
		</div>
	)
}
