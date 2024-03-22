import { FC } from "react"

interface Props {
	errorMessage: string
}

export const InputErrorMessage: FC<Props> = ({ errorMessage }) => {
	return (
		<p
			className={`text-[red] text-start text-[13.5px] ${
				errorMessage ? "mt-1 h-4" : "h-[1px]"
			} overflow-hidden transition-all duration-300`}
		>
			{errorMessage}
		</p>
	)
}
