import { Login } from "@/pages/login/Login"
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface Props {
	label: string
	type: string
	value: string | number
	setValue: Dispatch<SetStateAction<Login>>
}

export const Input: FC<Props> = ({ label, type, value, setValue }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [isView, setIsView] = useState<boolean>(false)

	const handleOnFocus = () => {
		setIsFocus(true)
	}

	const handleBlur = () => {
		if (!value) setIsFocus(false)
	}

	const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setValue((prevValue) => ({
			...prevValue,
			[type]: value,
		}))
	}

	const handleOnClick = () => {
		setIsView(!isView)
	}

	return (
		<div className="relative top-0 h-[52px]">
			<div
				className={`relative top-1/2 left-[14px] -translate-y-1/2 w-fit font-semibold px-2 z-30 pointer-events-none text-nowrap transition-all`}
			>
				<label
					htmlFor={type}
					className={`relative ${
						isFocus ? "text-xs text-[#485585]/60 -top-[26px]" : "text-sm text-[#485585]/40 top-0"
					} z-20 transition-all duration-500`}
				>
					{label}
				</label>
				<div
					className={`absolute -top-[26px] left-0 ${
						isFocus ? "w-full" : "w-0"
					} h-full transition-all duration-[400ms]`}
					style={{
						background: `linear-gradient(to bottom, white 50%, #e8f0fe 50%)`,
					}}
				></div>
			</div>
			<div className="h-full -mt-6">
				{isFocus && (
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br to-electric-violet-500 from-vividIndigo z-10 rounded-[10px]"></span>
				)}
				<input
					id={type}
					type={type === "password" && isView ? "text" : type}
					name={type}
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
						isFocus ? "w-[calc(100%-5px)] h-[calc(100%-5px)]" : "w-full h-full"
					} bg-zumthor-100 px-5 text-sm font-medium outline-none rounded-lg z-20`}
					onFocus={handleOnFocus}
					onBlur={handleBlur}
					value={value}
					onChange={handleOnchange}
				/>
				{type === "password" && (
					<button onClick={handleOnClick} type="button">
						{isView ? (
							<FaEyeSlash className="absolute top-1/2 right-[11.5px] -translate-y-1/2 z-40 text-gray-500" size={18} />
						) : (
							<FaEye className="absolute top-1/2 right-3 -translate-y-1/2 z-40 text-gray-500" />
						)}
					</button>
				)}
			</div>
		</div>
	)
}
