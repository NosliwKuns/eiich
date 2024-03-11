import { ReactNode } from "react"
import { Buttom } from "./ui/Buttom"

interface props {
	children: ReactNode
	planType: string
	planPrice: number
}

export const PlansCard: React.FC<props> = ({
	children,
	planType,
	planPrice,
}) => {
	return (
		<div className="relative w-full max-w-[410px] group">
			<div className="relative bg-white flex flex-col justify-between gap-12 px-10 py-16 h-full rounded-2xl border border-transparent cursor-pointer hover:border hover:border-vividIndig z-10">
				<div>
					<h4 className="text-xl mb-2">{planType}</h4>
					<h6 className="relative">
						<span className="absolute top-0">$</span>
						<span className="text-vividIndigo text-5xl font-bold ml-3">
							{planPrice}
						</span>{" "}
						Dólares
					</h6>
					<p className="text-cente mt-4">{children}</p>
				</div>
				<Buttom className="px-6 py-4 w-full text-center">
					Suscribirme
				</Buttom>
			</div>
			<span className="absolute top-0 inset- w-full h-full transition-all duration-200 ease-out rounded-2xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-md from-electricPurple to-vividIndigo opacity-30"></span>
		</div>
	)
}
