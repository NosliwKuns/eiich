import clsx from "clsx"
import React, { useEffect, useState } from "react"
import styles from "@/pages/awards/styles/flip-clock-countdown.module.css"
import { Digit } from "../types/awards"

interface Props {
	current: Digit
	next: Digit
}

export const FlipClockDigit: React.FC<Props> = ({ current, next }) => {
	const [digit, setDigit] = useState<Props>({ current, next })
	const [flipped, setFlipped] = useState<boolean>(false)

	useEffect(() => {
		if (digit.current !== current) {
			if (digit.current === digit.next) {
				setDigit({ ...digit, next })
			}
			setFlipped(true)
		} else {
			setFlipped(false)
		}
	}, [current, next, digit])

	const handleTransitionEnd = (): void => {
		setDigit({ current, next })
		setFlipped(false)
	}

	return (
		<div
			className={clsx(
				styles.digit_block,
				"rounded-md w-[7vw] max-w-[85px] h-full aspect-[1/1.4]"
			)}
		>
			<div className="absolute w-full h-1/2 overflow-hidden flex justify-center bg-electric-violet-500 items-end top-0 left-0 rounded-tl-md rounded-tr-md border-b border-white text-[#eee]">
				{digit.next}
			</div>
			<div className="absolute w-full h-1/2 overflow-hidden flex justify-center bg-electric-violet-400 items-start rounded-bl-md rounded-br-md bottom-0 left-0 text-white">
				{digit.current}
			</div>

			<div
				className={clsx(styles.card, "relative w-full h-1/2", {
					[styles.flipped]: flipped,
				})}
				onTransitionEnd={handleTransitionEnd}
			>
				<div className="absolute w-full h-full flex justify-center overflow-hidden bg-electric-violet-500 items-end rounded-tl-md rounded-tr-md border-b border-white text-[#eee]">
					{digit.current}
				</div>
				<div
					className={clsx(
						styles.card_face,
						styles.card_face_back,
						"absolute w-full h-full flex justify-center overflow-hidden bg-electric-violet-400 rounded-bl-md rounded-br-md items-start text-white"
					)}
				>
					{digit.next}
				</div>
			</div>
		</div>
	)
}
