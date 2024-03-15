// import styles from "@/pages/awards/styles/FlipClockCountdown.module.css"
//
// import clsx from "clsx"
import React from "react"
import FlipClockDigit from "./FlipClockDigit"
// import { FlipClockCountdownProps, FlipClockCountdownState, FlipClockCountdownUnitTimeFormatted } from './types';
import {
	calcTimeDelta,
	// convertToPx,
	parseTimeDelta,
} from "@/pages/awards/utils/index"

const defaultRenderMap = [true, true, true, true]
const defaultLabels = ["Días", "Horas", "Minutos", "Segundos"]

/**
 * A 3D animated flip clock countdown component for React.
 */
export function FlipClockCountdown(props: { to: string, onTick: void, onComplete: void}) {
	const {
		to,
		// className,
		// style,
		// children,
		onComplete = () => {},
		onTick = () => {},
		// showLabels = true,
		// showSeparators = true,
		// labels = defaultLabels,
		// labelStyle,
		// digitBlockStyle,
		// separatorStyle,
		// dividerStyle,
		// duration = 0.7,
		renderMap = defaultRenderMap,
		// hideOnComplete = true,
		// ...other
	} = props
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	const [state, setState] =
		React.useState(constructState)
	const countdownRef = React.useRef(0)

	function clearTimer() {
		window.clearInterval(countdownRef.current)
	}

	function constructState() {
		const timeDelta = calcTimeDelta(to)
		return {
			timeDelta,
			completed: timeDelta.total === 0,
		}
	}

	function tick() {
		const newState = constructState()
		setState(newState)
		onTick(newState)
		if (newState.completed) {
			clearTimer()
			onComplete()
		}
	}

	React.useEffect(() => {
		// setState(constructState());
		clearTimer()
		countdownRef.current = window.setInterval(tick, 1000)

		return () => clearTimer()
	}, [to])

	// const containerStyles = React.useMemo<React.CSSProperties>(() => {
	// 	const s = {
	// 		"--fcc-flip-duration": `${duration}s`,
	// 		"--fcc-digit-block-width": convertToPx(digitBlockStyle?.width),
	// 		"--fcc-digit-block-height": convertToPx(digitBlockStyle?.height),
	// 		"--fcc-shadow": digitBlockStyle?.boxShadow,
	// 		"--fcc-digit-font-size": convertToPx(digitBlockStyle?.fontSize),
	// 		"--fcc-digit-color": digitBlockStyle?.color,
	// 		"--fcc-label-font-size": convertToPx(labelStyle?.fontSize),
	// 		"--fcc-label-color": labelStyle?.color,
	// 		"--fcc-divider-color": dividerStyle?.color,
	// 		"--fcc-divider-height": convertToPx(dividerStyle?.height),
	// 		"--fcc-background":
	// 			digitBlockStyle?.background || digitBlockStyle?.backgroundColor,
	// 		"--fcc-separator-size": convertToPx(separatorStyle?.size),
	// 		"--fcc-separator-color": showSeparators
	// 			? separatorStyle?.color
	// 			: "transparent",
	// 		...style,
	// 	}

	// 	return s
	// }, [
	// 	style,
	// 	digitBlockStyle,
	// 	labelStyle,
	// 	duration,
	// 	dividerStyle,
	// 	separatorStyle,
	// 	showSeparators,
	// ])

	// const _digitBlockStyle = React.useMemo(() => {
	// 	if (digitBlockStyle) {
	// 		return {
	// 			...digitBlockStyle,
	// 			background: undefined,
	// 			backgroundColor: undefined,
	// 			width: undefined,
	// 			height: undefined,
	// 			boxShadow: undefined,
	// 			fontSize: undefined,
	// 			color: undefined,
	// 		}
	// 	}
	// 	return undefined
	// }, [digitBlockStyle])

	const sections = React.useMemo(() => {
		const formatted = parseTimeDelta(state.timeDelta)
		const _renderMap =
			renderMap.length >= 4 ? renderMap.slice(0, 4) : defaultRenderMap
		const _labels = labels.length >= 4 ? labels.slice(0, 4) : defaultLabels
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
	}, [renderMap, state])

	if (state?.completed && hideOnComplete) {
		return <React.Fragment>{children}</React.Fragment>
	}

	return (
		<div
			data-testid="fcc-container"
			className="flex items-center text-red text-[min(6vw,5.3rem)] font-bold leading-[0] justify-center"
		>
			{sections.map(([item, label], idx) => {
				return (
					<React.Fragment key={`digit-block-${idx}`}>
						<div className="relative flex gap-2">
							{showLabels && (
								<div className="leading-none absolute -bottom-8 left-1/2 text-lg font-normal uppercase -translate-x-1/2 text-electric-violet-950">
									{label}
								</div>
							)}
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
