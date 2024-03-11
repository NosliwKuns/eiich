import { plantillaPremio } from "@/assets"
import { Column } from "@/components/Column"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { useTransform, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const imgs = [
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio,
  plantillaPremio
]

export const AwardsSection = () => {

  const containerRef = useRef<HTMLDivElement>(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    resize()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section className="mt-12">
      <Container>
        <Typography className="text-center">
          Premios semanales
        </Typography>
        <div ref={containerRef} className="h-[175vh] relative overflow-hidden flex gap-[2vw] p-[2vw] mt-12">
          <Column images={[imgs[0], imgs[1], imgs[2], imgs[0]]} y={y} />
          <Column images={[imgs[3], imgs[4], imgs[5], imgs[3]]} y={y2} />
          <Column images={[imgs[6], imgs[7], imgs[8], imgs[6]]} y={y3} />
          <Column images={[imgs[9], imgs[10], imgs[11], imgs[9]]} y={y4} />
        </div>
      </Container>
    </section>
  )
}