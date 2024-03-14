// import React, { useState, useEffect } from "react"
// import '@/pages/awards/styles/test.css'

// // Función de componente
// const AnimatedCard = ({ animation, digit }) => {
// 	return (
// 		<div className={`flipCard ${animation}`}>
// 			<span>{digit}</span>
// 		</div>
// 	)
// }

// // Función de componente
// const StaticCard = ({ position, digit }) => {
// 	return (
// 		<div className={position}>
// 			<span>{digit}</span>
// 		</div>
// 	)
// }

// // Función de componente
// const FlipUnitContainer = ({ digit, shuffle, unit }) => {
// 	// Asignar valores de dígitos
// 	let currentDigit = digit
// 	let previousDigit = digit - 1

// 	// Para evitar un valor negativo
// 	if (unit !== "hours") {
// 		previousDigit = previousDigit === -1 ? 59 : previousDigit
// 	} else {
// 		previousDigit = previousDigit === -1 ? 23 : previousDigit
// 	}

// 	// Agregar cero
// 	if (currentDigit < 10) {
// 		currentDigit = `0${currentDigit}`
// 	}
// 	if (previousDigit < 10) {
// 		previousDigit = `0${previousDigit}`
// 	}

// 	// Mezclar dígitos
// 	const digit1 = shuffle ? previousDigit : currentDigit
// 	const digit2 = !shuffle ? previousDigit : currentDigit

// 	// Mezclar animaciones
// 	const animation1 = shuffle ? "fold" : "unfold"
// 	const animation2 = !shuffle ? "fold" : "unfold"

// 	return (
// 		<div className={"flipUnitContainer"}>
// 			<StaticCard position={"upperCard"} digit={currentDigit} />
// 			<StaticCard position={"lowerCard"} digit={previousDigit} />
// 			<AnimatedCard digit={digit1} animation={animation1} />
// 			<AnimatedCard digit={digit2} animation={animation2} />
// 		</div>
// 	)
// }

// // Función de componente
// const FlipClock = () => {
// 	const [time, setTime] = useState({
// 		hours: 0,
// 		hoursShuffle: true,
// 		minutes: 0,
// 		minutesShuffle: true,
// 		seconds: 0,
// 		secondsShuffle: true,
// 	})

// 	useEffect(() => {
// 		const timerID = setInterval(() => updateTime(), 1000)
// 		return () => clearInterval(timerID)
// 	}, [])

// 	const updateTime = () => {
// 		const now = new Date()
// 		const hours = now.getHours()
// 		const minutes = now.getMinutes()
// 		const seconds = now.getSeconds()

// 		setTime((prevTime) => ({
// 			...prevTime,
// 			hours: hours !== prevTime.hours ? hours : prevTime.hours,
// 			hoursShuffle: hours !== prevTime.hours,
// 			minutes: minutes !== prevTime.minutes ? minutes : prevTime.minutes,
// 			minutesShuffle: minutes !== prevTime.minutes,
// 			seconds: seconds !== prevTime.seconds ? seconds : prevTime.seconds,
// 			secondsShuffle: seconds !== prevTime.seconds,
// 		}))
// 	}

// 	const {
// 		hours,
// 		minutes,
// 		seconds,
// 		hoursShuffle,
// 		minutesShuffle,
// 		secondsShuffle,
// 	} = time

// 	return (
// 		<div className={"flipClock"}>
// 			<FlipUnitContainer
// 				unit={"hours"}
// 				digit={hours}
// 				shuffle={hoursShuffle}
// 			/>
// 			<FlipUnitContainer
// 				unit={"minutes"}
// 				digit={minutes}
// 				shuffle={minutesShuffle}
// 			/>
// 			<FlipUnitContainer
// 				unit={"seconds"}
// 				digit={seconds}
// 				shuffle={secondsShuffle}
// 			/>
// 		</div>
// 	)
// }

// export default FlipClock
