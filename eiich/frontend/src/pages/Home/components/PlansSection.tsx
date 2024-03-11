import { PlansCard } from "@/components/PlansCard"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

export const PlansSection = () => {
  return (
    <section className="mt-12">
      <Container >
        <Typography className="text-center">
          Únete a nuestros planes
        </Typography>
        <div className="mt-12 bg-[#f3f3ff] px-[2vw] py-16 flex justify-center gap-[6vw]">
          <PlansCard planType="Plan Mensual" planPrice={10}>
            Participas en todos los premios
            vigentes que estén disponibles
            durante el tiempo de tu membresía
          </PlansCard>
          <PlansCard planType="Plan Anual" planPrice={100}>
            Pagas solo $8.4 MENSUALES
            y te ahorras $20 al año
          </PlansCard>
        </div>
      </Container>
    </section>
  )
}
