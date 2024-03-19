import { ChangeEvent, useEffect, useState } from "react"

export const Input = () => {
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [value, setValue] = useState<string>("")

	const handleOnFocus = () => {
		setIsFocus(true)
	}

	const handleBlur = () => {
		if (!value) setIsFocus(false)
	}

	const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setValue(value)
	}

	// useEffect(() => {
	// 	if (value) {
	// 		setIsFocus(true)
	// 	}
	// }, [value])
	// console.log(isFocus)
	return (
		<div className="relative h-[52px]">
			<label
				htmlFor="email"
				className={`absolute left-[14px] ${isFocus ? "top-[2.5px] text-[12px] text-[#485585]/80" : "top-1/2 text-[#485585]/70 text-sm"} -translate-y-1/2 font-semibold px-2 z-30 transition-all`}
				style={{
					background: `linear-gradient(to bottom, ${isFocus ? "white 50%" : "#e8f0fe 90%"}, #e8f0fe 20%)`
				}}
				// style={{
				// 	mixBlendMode: 'multiply' // Elige el modo de fusión deseado
				// }}
			>
				Correo electronico*
			</label>
			<div className="h-full">
				{isFocus && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br to-electric-violet-500 from-vividIndigo z-10 rounded-[10px]">aaa</span>}
				<input
					id="email"
					type="email"
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isFocus ? "w-[calc(100%-5px)] h-[calc(100%-5px)] bg-white" : "w-full h-full"} bg-[#e8f0fe] px-5 text-sm font-medium outline-none rounded-lg z-20`}
					onFocus={handleOnFocus}
					onBlur={handleBlur}
					value={value}
					onChange={handleOnchange}
				/>
			</div>
		</div>
	)
}
