import {
	Digit,
	FlipClockCountdownTimeDelta,
	FlipClockCountdownTimeDeltaFormatted,
} from "../types/awards"

export const defaultTimeDelta = {
	total: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
}

export function calcTimeDelta(
	target: Date | string | number
): FlipClockCountdownTimeDelta {
	if (typeof target === "string") {
		const parts = target.split("/")

		if (parts.length !== 3) {
			throw new Error(
				"Formato de fecha incorrecto. Se esperaba 'dd/mm/yy'."
			)
		}

		const day = parseInt(parts[0], 10)
		const month = parseInt(parts[1], 10) - 1
		const year = parseInt(parts[2], 10)

		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			throw new Error(
				"Formato de fecha incorrecto. Se esperaban números enteros para el día, mes y año."
			)
		}

		const date = new Date(year, month, day)
		if (isNaN(date.getTime())) {
			throw new Error("Fecha inválida")
		}

		target = date
	}

	const now = new Date()
	const targetTime = typeof target === "number" ? target : target.getTime()
	let timeLeft = Math.round((targetTime - now.getTime()) / 1000)
	if (timeLeft < 0) timeLeft = 0

	const days = Math.floor(timeLeft / (24 * 60 * 60))
	const hours = Math.floor((timeLeft / 3600) % 24)
	const minutes = Math.floor((timeLeft / 60) % 60)
	const seconds = Math.floor(timeLeft % 60)

	return {
		total: timeLeft,
		days,
		hours,
		minutes,
		seconds,
	}
}

export function pad(n: number): Digit[] {
	return ("0".repeat(Math.max(0, 2 - String(n).length)) + String(n)).split("")
}

export function parseTimeDelta(
	timeDelta: FlipClockCountdownTimeDelta
): FlipClockCountdownTimeDeltaFormatted {
	return {
		days: {
			current: pad(timeDelta.days),
			next: pad(timeDelta.days),
		},
		hours: {
			current: pad(timeDelta.hours),
			next: pad(timeDelta.hours),
		},
		minutes: {
			current: pad(timeDelta.minutes),
			next: pad(timeDelta.minutes),
		},
		seconds: {
			current: pad(timeDelta.seconds),
			next: pad(timeDelta.seconds),
		},
	}
}
