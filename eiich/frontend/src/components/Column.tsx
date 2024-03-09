import { MotionValue, motion } from "framer-motion"
import styles from "@/components/styles/column.module.css"

interface Props {
  images: string[]
  y?: MotionValue<number>
}

export const Column: React.FC<Props> = ({ images, y }) => {
  return (
    <motion.div style={{ y }} className={`${styles.column} relative w-1/4 h-full flex flex-col gap-[2vw]`}>
      {
        images.map((image, index) =>(
          <img className="rounded-[1vw]" key={index} src={image} alt="" />
        ))
      }
    </motion.div>
  )
}