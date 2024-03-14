import { useEffect } from "react"
// import { Typography } from "@/components/ui/Typography"
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

interface SegmentElements {
	segmentDisplayTop: HTMLElement | null
	segmentDisplayBottom: HTMLElement | null
	segmentOverlay: HTMLElement | null
	segmentOverlayTop: HTMLElement | null
	segmentOverlayBottom: HTMLElement | null
}

const updateTimeSegment = (
	segmentElement: HTMLElement | null,
	timeValue: number
) => {
	const getTimeSegmentElements = (segmentElement: HTMLElement | null) => {
		if (!segmentElement)
			return {
				segmentDisplayTop: null,
				segmentDisplayBottom: null,
				segmentOverlay: null,
				segmentOverlayTop: null,
				segmentOverlayBottom: null,
			}

		const segmentDisplay =
			segmentElement.querySelector<HTMLElement>(".segment-display")
		const segmentDisplayTop = segmentDisplay?.querySelector<HTMLElement>(
			".segment-display__top"
		)
		const segmentDisplayBottom = segmentDisplay?.querySelector<HTMLElement>(
			".segment-display__bottom"
		)

		const segmentOverlay = segmentDisplay?.querySelector<HTMLElement>(
			`.${styles["segment-overlay"]}`
		)
		const segmentOverlayTop = segmentOverlay?.querySelector<HTMLElement>(
			`.${styles["segment-overlay__top"]}`
		)
		const segmentOverlayBottom = segmentOverlay?.querySelector<HTMLElement>(
			`.${styles["segment-overlay__bottom"]}`
		)

		console.log(segmentOverlay)
		return {
			segmentDisplayTop,
			segmentDisplayBottom,
			segmentOverlay,
			segmentOverlayTop,
			segmentOverlayBottom,
		}
	}
	console.log(segmentElement, "hola")

	const segmentElements = getTimeSegmentElements(segmentElement)
	console.log(segmentElements.segmentOverlay, timeValue)

	if (!segmentElements.segmentDisplayTop || !segmentElements.segmentOverlay)
		return

	if (
		parseInt(segmentElements.segmentDisplayTop.textContent || "0", 10) ===
		timeValue
	) {
		console.log(
			parseInt(segmentElements.segmentDisplayTop.textContent || "0", 10),
			timeValue
		)
		return
	}
	console.log("aiudaaaaa")
	segmentElements.segmentOverlay.classList.add(`${styles["flip"]}`)

	if (
		// !segmentElements.segmentDisplayBottom ||
		!segmentElements.segmentOverlayBottom
	)
		return

	segmentElements.segmentDisplayTop.textContent = timeValue.toString()
	segmentElements.segmentOverlayBottom.textContent = timeValue.toString()
	console.log(timeValue)
	// segmentElements.segmentOverlayBottom!.textContent = timeValue.toString()

	const finishAnimation = () => {
		console.log(
			timeValue,
			"aaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
		)
		let a = 1
		a += 1
		console.log(a, "ehhhhh")
		if (!segmentElements.segmentOverlay) return

		segmentElements.segmentOverlay.classList.remove(`${styles["flip"]}`)
		if (
			!segmentElements.segmentOverlayTop ||
			!segmentElements.segmentDisplayBottom
		)
			return

		segmentElements.segmentDisplayBottom.textContent = timeValue.toString()
		segmentElements.segmentOverlayTop.textContent = timeValue.toString()

		segmentElements.segmentOverlay.removeEventListener(
			"animationend",
			finishAnimation
		)
	}

	segmentElements.segmentOverlay.addEventListener(
		"animationend",
		finishAnimation
	)
}

const updateTimeSection = (sectionID: string, timeValue: number) => {
	const firstNumber = Math.floor(timeValue / 10) || 0
	const secondNumber = timeValue % 10 || 0
	const sectionElement = document.getElementById(sectionID)

	if (!sectionElement) return

	const timeSegments =
		sectionElement.querySelectorAll<HTMLElement>(".time-segment")

	updateTimeSegment(timeSegments[0], firstNumber)
	updateTimeSegment(timeSegments[1], secondNumber)
	console.log(timeSegments[0])
}

const getTimeRemaining = (targetDateTime: number) => {
	const nowTime = Date.now()
	const complete = nowTime >= targetDateTime

	if (complete) {
		return {
			complete,
			seconds: 0,
			minutes: 0,
			hours: 0,
		}
	}
	console.log(targetDateTime)
	const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000)
	const hours = Math.floor(secondsRemaining / 60 / 60)
	const minutes = Math.floor(secondsRemaining / 60 - hours * 60)
	const seconds = secondsRemaining % 60
	console.log(secondsRemaining, nowTime)
	return {
		complete,
		seconds,
		minutes,
		hours,
	}
}

const updateAllSegments = (targetDate: Date) => {
	const timeRemainingBits = getTimeRemaining(targetDate.getTime())

	updateTimeSection("seconds", timeRemainingBits.seconds)
	updateTimeSection("minutes", timeRemainingBits.minutes)
	updateTimeSection("hours", timeRemainingBits.hours)
	console.log(timeRemainingBits.seconds)
	return timeRemainingBits.complete
}

export const CountdownTimer: React.FC<Props> = () => {
	const targetDate = new Date()
	targetDate.setHours(targetDate.getHours() + 5)

	useEffect(() => {
		const countdownTimer = setInterval(() => {
			const isComplete = updateAllSegments(targetDate)

			if (isComplete) {
				clearInterval(countdownTimer)
			}
			console.log(targetDate)
		}, 1000)
		return () => {
			clearInterval(countdownTimer)
		}
	}, [targetDate])

	useEffect(() => {
		updateAllSegments(targetDate)
	}, [targetDate])

	return (
		<div className="flex justify-center gap-8">
			<div id="seconds" className="text-center text-3xl">
				<div className="flex gap-3">
					<div className="block text-8xl font-bold w-24 time-segment">
						<div className="relative h-full segment-display">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111] segment-display__top">
								{/* {formatDigit(timeLeft.days)[0]} */}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333] segment-display__bottom">
								{/* {formatDigit(timeLeft.days)[0]} */}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full segment-overlay`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom segment-overlay__top`}
								>
									{/* {formatDigit(timeLeft.days)[0]} */}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top segment-overlay__bottom`}
								>
									{/* {formatDigit(timeLeft.days)[0]} */}
								</div>
							</div>
						</div>
					</div>
					<div className="block text-8xl font-bold w-24 time-segment">
						<div className="relative h-full segment-display">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111] segment-display__top">
								{/* {formatDigit(timeLeft.days)[1]} */}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333] segment-display__bottom">
								{/* {formatDigit(timeLeft.days)[1]} */}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full segment-overlay`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom segment-overlay__top`}
								>
									{/* {formatDigit(timeLeft.days)[1]} */}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top segment-overlay__bottom`}
								>
									{/* {formatDigit(timeLeft.days)[1]} */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<p>Días</p>
			</div>
			{/* <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
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
			</div> */}
			<div className="text-center text-3xl">
				<div className="flex gap-3">
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-[#eee] bg-[#111]">
								{/* {formatDigit(timeLeft.seconds)[0]} */}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-white bg-[#333]">
								{/* {formatDigit(timeLeft.seconds)[0]} */}
							</div>
							<div
								className={`${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-white bg-[#111] origin-bottom`}
								>
									{/* {formatDigit(timeLeft.seconds)[0]} */}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-[#eee] bg-[#333]  border-t-2 border-black origin-top`}
								>
									{/* {formatDigit(timeLeft.seconds)[0]} */}
								</div>
							</div>
						</div>
					</div>
					<div className="block text-8xl font-bold w-24">
						<div className="relative h-full">
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-normal text-red-500 bg-[#111]">
								{/* {parseInt(formatDigit(timeLeft.seconds)[1]) - 0} */}
							</div>
							<div className="overflow-hidden text-center w-full h-1/2 relative leading-[0] text-blue-500 bg-[#333]">
								{/* {formatDigit(timeLeft.seconds)[1]} */}
							</div>
							<div
								className={`second-right ${styles["segment-overlay"]} absolute top-0 h-full w-full`}
							>
								<div
									className={`${styles["segment-overlay__top"]} absolute overflow-hidden text-center w-full h-1/2 top-0 leading-normal text-yellow-500 bg-[#111] origin-bottom duration-1000`}
								>
									{/* {parseInt(
										formatDigit(timeLeft.seconds)[1]
									) - 0} */}
								</div>
								<div
									className={`${styles["segment-overlay__bottom"]} absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] text-green-500 bg-[#333]  border-t-2 border-black origin-top`}
								>
									{/* {parseInt(
										formatDigit(timeLeft.seconds)[1]
									) - 0} */}
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
