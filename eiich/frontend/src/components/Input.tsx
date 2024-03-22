import { Login } from "@/pages/login/Login"
import { Register } from "@/pages/register/Register"
import { ChangeEvent, Dispatch, SetStateAction, useState, useEffect } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

type LoginKeys = keyof Login
type RegisterKeys = keyof Register

type AuthKeys = LoginKeys | RegisterKeys

export type Touched = {
	[K in AuthKeys]?: boolean
}
interface Props<T> {
	label: string
	type: string
	value: string | number
	name: string
	setValue: Dispatch<SetStateAction<T>>
	setTouched: Dispatch<SetStateAction<Touched>>
	errors: Login | Register
}

export const Input = <T extends Login | Register>({
	label,
	type,
	name,
	value,
	setValue,
	setTouched,
	errors,
}: Props<T>) => {
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const [isView, setIsView] = useState<boolean>(false)

	useEffect(() => {
		if (value) setIsFocus(true)
	}, [value])

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
			[name]: value,
		}))
		setTouched((prevTouched) => ({
			...prevTouched,
			[name]: true,
		}))
	}

	const handleOnClick = () => {
		setIsView(!isView)
	}
	const valid = errors[name as keyof Login]

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
				{(isFocus || valid) && (
					<span
						className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${
							valid ? "bg-[red]" : "bg-gradient-to-br to-electric-violet-500 from-vividIndigo"
						} z-10 rounded-[10px] transition-colors`}
					></span>
				)}
				<input
					id={name}
					type={type === "password" && isView ? "text" : type}
					name={name}
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
						isFocus || valid ? "w-[calc(100%-4px)] h-[calc(100%-4px)]" : "w-full h-full"
					} bg-zumthor-100 ${
						type === "password" ? "pl-5 pr-8" : "px-5"
					} text-sm font-medium outline-none rounded-lg z-20`}
					onFocus={handleOnFocus}
					onBlur={handleBlur}
					value={value}
					onChange={handleOnchange}
					autoComplete="new-password"
				/>
				{type === "password" && (
					<button onClick={handleOnClick} type="button">
						{isView ? (
							<FaEyeSlash
								className="absolute top-1/2 right-[11.5px] -translate-y-1/2 z-40 text-gray-500"
								size={18}
							/>
						) : (
							<FaEye className="absolute top-1/2 right-3 -translate-y-1/2 z-40 text-gray-500" />
						)}
					</button>
				)}
			</div>
		</div>
	)
}
