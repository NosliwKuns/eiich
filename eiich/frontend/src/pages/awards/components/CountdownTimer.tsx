import { useState, useEffect, useCallback, useRef } from "react"
import { Typography } from "@/components/ui/Typography"
import styles from "@/pages/awards/styles/countdown-timer.module.css"

interface Props {
	targetDate: string
}

type TimeLeft = {
	days?: number
	hours?: number
	minutes?: number
	seconds?: number
}

export const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
	const convertDateToISO = (dateString: string): string => {
		const [day, month, year] = dateString.split("/")
		return `${year}-${month}-${day}T00:00:00`
	}

	const targetDateIso = convertDateToISO(targetDate)

	const calculateTimeLeft = useCallback(() => {
		const difference = +new Date(targetDateIso) - +new Date()
		let timeLeft: TimeLeft = {}

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		}

		return timeLeft
	}, [targetDateIso])

	const formatDigit = (value: number | undefined): string =>
		value!.toString().padStart(2, "0")

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => {
			clearTimeout(timer)
		}
	})

	const prevTimeLeftRef = useRef({
		seconds: undefined,
		minutes: undefined,
		hours: undefined,
		days: undefined,
	})

	useEffect(() => {
		// if (
		// 	prevTimeLeftRef.current.seconds !== timeLeft.seconds ||
		// 	prevTimeLeftRef.current.minutes !== timeLeft.minutes ||
		// 	prevTimeLeftRef.current.hours !== timeLeft.hours ||
		// 	prevTimeLeftRef.current.days !== timeLeft.days
		// ) {
		// }
        
		const secondRight = document.querySelector(".second-right")
        const finishAnimation = (element: Element) => {
            element.classList.remove(`${styles["flip"]}`)
        }
        if(secondRight)
		if (prevTimeLeftRef.current.seconds !== timeLeft.seconds) {
            secondRight.classList.add(`${styles['flip']}`)
            secondRight.addEventListener("animationend", () => finishAnimation(secondRight))
		}
		const segmentOverlay = document.querySelector(
			`.${styles["segment-overlay"]}`
		)

		if (segmentOverlay) {
			const finishAnimation = () => {
				segmentOverlay.classList.remove(`${styles["flip"]}`)
			}

			segmentOverlay.classList.add(`${styles["flip"]}`)

			segmentOverlay.addEventListener("animationend", finishAnimation)
		}
	}, [timeLeft])

	return (
		<div className="flex justify-center gap-8">
			<div className="text-center text-3xl">
				<div className="flex gap-3">
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111]">
								{formatDigit(timeLeft.days)[0]}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333]">
								{formatDigit(timeLeft.days)[0]}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom`}
								>
									{formatDigit(timeLeft.days)[0]}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top`}
								>
									{formatDigit(timeLeft.days)[0]}
								</div>
							</div>
						</div>
					</div>
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111]">
								{formatDigit(timeLeft.days)[1]}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333]">
								{formatDigit(timeLeft.days)[1]}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom`}
								>
									{formatDigit(timeLeft.days)[1]}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top`}
								>
									{formatDigit(timeLeft.days)[1]}
								</div>
							</div>
						</div>
					</div>
				</div>
				<p>Días</p>
			</div>
			<div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
				<Typography className="text-lg font-semibold mb-2">
					Horas Restantes
				</Typography>
				<Typography className="text-4xl font-bold">
					{timeLeft.hours !== undefined
						? formatDigit(timeLeft.hours)
						: "00"}
				</Typography>
			</div>
			<div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
				<Typography className="text-lg font-semibold mb-2">
					Minutos Restantes
				</Typography>
				<Typography className="text-4xl font-bold">
					{timeLeft.minutes !== undefined
						? formatDigit(timeLeft.minutes)
						: "00"}
				</Typography>
			</div>
			<div className="text-center text-3xl">
				<div className="flex gap-3">
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111]">
								{formatDigit(timeLeft.seconds)[0]}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333]">
								{formatDigit(timeLeft.seconds)[0]}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom`}
								>
									{formatDigit(timeLeft.seconds)[0]}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top`}
								>
									{formatDigit(timeLeft.seconds)[0]}
								</div>
							</div>
						</div>
					</div>
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-red-500 bg-[#111]">
								{parseInt(formatDigit(timeLeft.seconds)[1]) - 1}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-blue-500 bg-[#333]">
								{formatDigit(timeLeft.seconds)[1]}
							</div>
							<div
								className={`second-right ${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-yellow-500 bg-[#111] origin-bottom duration-1000`}
								>
									{parseInt(
										formatDigit(timeLeft.seconds)[1]
									) - 0}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-green-500 bg-[#333]  border-t-2 border-black origin-top`}
								>
									{parseInt(
										formatDigit(timeLeft.seconds)[1]
									) - 1}
								</div>
							</div>
						</div>
					</div>
				</div>
				<p>Segundos</p>
			</div>
		</div>
	)
}
