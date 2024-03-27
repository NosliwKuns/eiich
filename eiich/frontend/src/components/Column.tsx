import { MotionValue, motion } from "framer-motion"
import styles from "@/components/styles/column.module.css"

interface Props {
  images: string[]
  y?: MotionValue<number>
  className?: string
  width?: string
}

export const Column: React.FC<Props> = ({ images, y, className, width }) => {
  return (
    <motion.div style={{ y }} className={`${styles.column} ${className} relative ${width} h-full flex flex-col gap-6 2xl:gap-8`}>
      {
        images.map((image, index) =>(
          <img className="rounded-[1vw]" key={index} src={image} alt="" />
        ))
      }
    </motion.div>
  )
}