import { Input } from "@/components/Input"
import { Buttom } from "@/components/ui/Buttom"
import { Typography } from "@/components/ui/Typography"

export const Login = () => {
	return (
		<div>
			<div className="flex bg-babyBlue min-h-screen rounded-lg py-28">
				<div className="m-auto p-12 bg-white w-fit rounded-2xl">
					<div className="flex items-center xl:p-10">
						<form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
							<Typography className="mb-6 font-extrabold text-dark-grey-900">
								Iniciar sesión
							</Typography>
							{/* <label
								htmlFor="email"
								className="mb-2 text-sm text-start text-gray-700"
							>
								Correo electronico*
							</label>
							<input
								id="email"
								type="email"
								placeholder="Ingresa tu correo"
								className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
							/>
							<label
								htmlFor="password"
								className="mb-2 text-sm text-start text-grey-900"
							>
								Contraseña*
							</label>
							<input
								id="password"
								type="password"
								placeholder="Ingresa tu contraseña"
								className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
							/> */}
							<label
								htmlFor="password"
								className="mb-2 text-sm text-start text-grey-900"
							>
								Contraseña*
							</label>
							<input
								id="password"
								type="password"
								placeholder="Ingresa tu contraseña"
								className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
							/>
							<Input />
							<div className="flex flex-row justify-between mb-8">
								<label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
									<input
										type="checkbox"
										checked
										value=""
										className="sr-only peer"
									/>
									<div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer peer-checked:border-0 peer-checked:bg-purple-500">
										<img
											className=""
											src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
											alt="tick"
										/>
									</div>
									<span className="ml-3 text-sm font-normal text-gray-900">
										Mantenerme conectado
									</span>
								</label>
								<a
									href="javascript:void(0)"
									className="mr-4 text-sm font-medium text-purple-blue-500"
								>
									Olvidaste la contraseña?
								</a>
							</div>
							<Buttom className="w-full py-4">
								Iniciar sesión
							</Buttom>
							<div className="flex items-center my-3">
								<hr className="h-0 border-b border-solid border-gray-200 grow" />
								<p className="mx-4 text-grey-600">o</p>
								<hr className="h-0 border-b border-solid border-gray-200 grow" />
							</div>
							<a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 cursor-pointer rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-grey-300">
								<img
									className="h-5 mr-2"
									src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
									alt=""
								/>
								Iniciar sesión con Google
							</a>
							<p className="text-sm leading-relaxed text-grey-900">
								Aún no estas suscrito?{" "}
								<a
									href="javascript:void(0)"
									className="font-bold text-gray-500"
								>
									Crear cuenta
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
