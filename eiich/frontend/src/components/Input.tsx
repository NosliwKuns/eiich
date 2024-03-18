export const Input = () => {
	return (
		<div className="relative h-[52px]">
			<label
				htmlFor="email"
				className="absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold text-[#485585]/70"
			>
				Correo electronico*
			</label>
			<input
				id="email"
				type="email"
				className="flex items-center w-full h-full px-5 mr-2 text-sm font-medium outline-none mb-7 bg-[#f6f8fd] placeholder:text-gray-700 text-dark-gray-900 rounded-lg"
			/>
		</div>
	)
}
