import { Header } from "@/components/Header"
import { Container } from "@/components/ui/Container"
import { BenefitCard } from "./components/BenefitCard"
import { Typography } from "@/components/ui/Typography"
import { camara } from "@/assets"
import { Buttom } from "@/components/ui/Buttom"

export const Benefits = () => {
	return (
		<div className="min-h-[calc(100vh-394px)] pb-8">
			<Header>
				<Typography className="px-40 text-center">
					Descubre un universo de beneficios exclusivos
				</Typography>
			</Header>
			<Container>
				<div className="flex justify-center gap-12 mt-28">
					<BenefitCard
						image={camara}
						classImage="-top-[15%] left-[53%] w-[80%]"
					>
						Sorteos de premios exclusivos todos los meses
					</BenefitCard>
					<BenefitCard
						image={camara}
						classImage="-top-[15%] left-[53%] w-[80%]"
					>
						Sorteos de premios exclusivos todos los meses
					</BenefitCard>
					<BenefitCard
						image={camara}
						classImage="-top-[15%] left-[53%] w-[80%]"
					>
						Sorteos de premios exclusivos todos los meses
					</BenefitCard>
				</div>
				<div className="flex flex-col gap-6 mt-12">
					<h6 className="text-center text-xl">
						¡Únete a <span className="text-vividIndigo font-semibold">nuestra comunidad</span> y disfruta de
						estos beneficios exclusivos!
					</h6>
					<Buttom className="px-10 py-4 mx-auto">
						Suscribirme ahora
					</Buttom>
				</div>
			</Container>
		</div>
	)
}
