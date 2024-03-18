export type Digit = number | string

export interface FlipClockCountdownUnitTimeFormatted {
    current: Digit[] 
    next: Digit[]
}

export interface FlipClockCountdownTimeDeltaFormatted {
	days: FlipClockCountdownUnitTimeFormatted
    hours: FlipClockCountdownUnitTimeFormatted
    minutes: FlipClockCountdownUnitTimeFormatted
    seconds: FlipClockCountdownUnitTimeFormatted
}

export interface FlipClockCountdownTimeDelta {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}
