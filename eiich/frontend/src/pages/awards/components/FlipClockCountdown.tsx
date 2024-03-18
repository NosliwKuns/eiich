import React, { useCallback, useEffect, useRef, useState } from "react"
import { calcTimeDelta, parseTimeDelta } from "@/pages/awards/utils/index"
import { FlipClockCountdownUnitTimeFormatted } from "../types/awards"
import { FlipClockDigit } from "./FlipClockDigit"
// import { FlipClockCountdownUnitTimeFormatted } from "@leenguyen/react-flip-clock-countdown"

const defaultRenderMap = [true, true, true, true]
const defaultLabels = ["Días", "Horas", "Minutos", "Segundos"]

interface Props {
	to: string
}

export const FlipClockCountdown: React.FC<Props> = ({ to }) => {

	const countdownRef = useRef(0)

	const clearTimer = () => {
		window.clearInterval(countdownRef.current)
	}

	const constructState = useCallback(() => {
		const timeDelta = calcTimeDelta(to)
		return {
			timeDelta,
			completed: timeDelta.total === 0,
		}
	}, [to])

	const [state, setState] = useState(constructState)

	const tick = useCallback(() => {
		const newState = constructState()
		setState(newState)
		if (newState.completed) {
			clearTimer()
			// onComplete()
		}
	}, [constructState])

	useEffect(() => {
		clearTimer()
		countdownRef.current = window.setInterval(tick, 1000)

		return () => clearTimer()
	}, [tick])

	const sections = React.useMemo(() => {
		const formatted = parseTimeDelta(state.timeDelta)
		const _renderMap = defaultRenderMap
		const _labels = defaultLabels
		const times = Object.values(
			formatted
		) as FlipClockCountdownUnitTimeFormatted[]
		const r: [FlipClockCountdownUnitTimeFormatted, string][] = []
		_renderMap.forEach((show, i) => {
			if (show) {
				r.push([times[i], _labels[i]])
			}
		})
		return r
	}, [state])

	return (
		<div
			data-testid="fcc-container"
			className="flex items-center text-red text-[min(6vw,5.3rem)] font-bold leading-[0] justify-center"
		>
			{sections.map(([item, label], idx) => {
				return (
					<React.Fragment key={`digit-block-${idx}`}>
						<div className="relative flex gap-2">
							<div className="leading-none absolute -bottom-8 left-1/2 text-lg font-normal uppercase -translate-x-1/2 text-electric-violet-950">
								{label}
							</div>

							{item.current.map((cItem, cIdx) => (
								<FlipClockDigit
									key={cIdx}
									current={cItem}
									next={item.next[cIdx]}
								/>
							))}
						</div>
						{idx < sections.length - 1 && (
							<div className="mx-2 flex flex-col gap-2 justify-center items-center before:w-2.5 before:h-2.5 before:bg-electric-violet-500 before:rounded-full after:w-2.5 after:h-2.5 after:bg-electric-violet-500 after:rounded-full"></div>
						)}
					</React.Fragment>
				)
			})}
		</div>
	)
}
