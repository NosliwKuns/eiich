
interface props {
    children: React.ReactNode
    image: string
    classImage?: string
}

export const BenefitCard: React.FC<props> = ({ children, image, classImage = "top-0 left-1/2" }) => {
  return (
		<div className="relative bg-white w-[270px] min-h-80 rounded-2xl pt-48 px-10">
			<img className={`absolute z-10 -translate-x-1/2 ${classImage}`} loading="lazy" src={image} alt="test" />
			<div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[60%] aspect-square rounded-full bg-gradient-to-br from-vividIndigo to-magentaPink"></div>
			<div className="absolute -top-[11%] left-[51.5%] -translate-x-1/2 w-[60%] aspect-square rounded-full bg-gradient-to-br from-vividIndigo to-magentaPink blur-xl opacity-70"></div>
			<div className="absolute top-[50%] left-0 flex justify-center gap-3 w-full">
				<span className="block w-2 h-2 bg-babyBlue rounded-full"></span>
				<span className="block w-2 h-2 bg-babyBlue rounded-full"></span>
				<span className="block w-2 h-2 bg-babyBlue rounded-full"></span>
				<span className="block w-2 h-2 bg-babyBlue rounded-full"></span>
				<span className="block w-2 h-2 bg-babyBlue rounded-full"></span>
			</div>
			<div>
				<p className="text-center">{children}</p>
			</div>
			<span className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl bg-gradient-to-br filter from-electricPurple to-vividIndigo opacity-30 -z-10"></span>
		</div>
  )
}

