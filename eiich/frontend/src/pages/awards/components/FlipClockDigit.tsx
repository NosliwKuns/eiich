import clsx from "clsx"
import React from "react"
import styles from "@/pages/awards/styles/FlipClockCountdown.module.css"
// import { Digit, FlipClockCountdownProps } from './types';

// export interface FlipClockDigitProps {
//   current: Digit;
//   next: Digit;
//   className?: string;
//   style?: FlipClockCountdownProps['digitBlockStyle'];
// }

// type FlipClockDigitState = {
//   current: Digit;
//   next: Digit;
// };

export default function FlipClockDigit(props) {
	const { current, next, className, style } = props
	const [digit, setDigit] = React.useState({ current, next })
	const [flipped, setFlipped] = React.useState(false)

	React.useEffect(() => {
		if (digit.current !== current) {
			if (digit.current === digit.next) {
				setDigit({ ...digit, next })
			}
			setFlipped(true)
		} else {
			setFlipped(false)
		}
	}, [current, next])

	const handleTransitionEnd = (): void => {
		setDigit({ current, next })
		setFlipped(false)
	}

	return (
		<div
			className={clsx(
				styles.fcc__digit_block,
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
				className={clsx(styles.fcc__card, "relative w-full h-1/2", {
					[styles.fcc__flipped]: flipped,
				})}
				onTransitionEnd={handleTransitionEnd}
			>
				<div
					className="absolute w-full h-full flex justify-center overflow-hidden bg-electric-violet-500 items-end rounded-tl-md rounded-tr-md border-b border-white text-[#eee]"
					style={{ backfaceVisibility: "hidden" }}
				>
					{digit.current}
				</div>
				<div
					className="absolute w-full h-full flex justify-center overflow-hidden bg-electric-violet-400 rounded-bl-md rounded-br-md items-start text-white"
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateX(-180deg)",
					}}
				>
					{digit.next}
				</div>
			</div>
		</div>
	)
}
