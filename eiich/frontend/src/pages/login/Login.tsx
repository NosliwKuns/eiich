import { Input } from "@/components/Input"
import { Buttom } from "@/components/ui/Buttom"
import { Typography } from "@/components/ui/Typography"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"
import { validate } from "@/validations/login"

export interface Login {
	email: string
	password: string
}

export const Login = () => {
	const [values, setValue] = useState<Login>({
		email: "",
		password: "",
	})

	const [errors, setErrors] = useState<Login>({
		email: "",
		password: "",
	})

	const [touched, setTouched] = useState({
		email: false,
		password: false,
	})

	const [isChecked, setIsChecked] = useState(false)

	useEffect(() => {
		if (touched.email || touched.password) {
			const { errors } = validate(values, touched);
			setErrors(errors)
		}
	}, [values, touched])

	return (
		<div className="relative flex bg-babyBlue min-h-screen rounded-lg py-28">
			<Link
				to="/"
				className="absolute top-3 left-3 flex items-center gap-2 bg-white rounded-lg font-semibold py-2 px-4 border-2 text-elc-500 border-electric-violet-500"
			>
				<IoArrowBack /> Ir a inicio
			</Link>
			<div className="m-auto p-12 bg-white w-fit rounded-2xl transition-all">
				<div className="flex items-center xl:p-10">
					<form className="flex flex-col gap-6 w-1/2 min-w-96 bg-white rounded-3xl transition-all">
						<Typography className="mb-2 font-extrabold text-dark-grey-900 text-center">Iniciar sesión</Typography>
						<div>
							<Input
								label="Correo electrónico*"
								type="email"
								value={values.email}
								setValue={setValue}
								setTouched={setTouched}
								errors={errors}
							/>
							<p className={`text-[red] text-start text-[13.5px] mt-2 ${errors.email ? "h-4" : "h-[1px]"} overflow-hidden transition-all duration-300`}>{errors.email}</p>
						</div>
						<div>
							<Input
								label="Contraseña*"
								type="password"
								value={values.password}
								setValue={setValue}
								setTouched={setTouched}
								errors={errors}
							/>
							<p className={`text-[red] text-start text-[13.5px] mt-2 ${errors.password ? "h-4" : "h-[1px]"} overflow-hidden transition-all duration-300`}>{errors.password}</p>
						</div>

						<div className="flex flex-row justify-between gap-6 -mt-2 text-xs items-center">
							<label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
								<input
									type="checkbox"
									checked={isChecked}
									className="sr-only peer"
									onChange={() => setIsChecked(!isChecked)}
								/>
								<div className="w-4 h-4 bg-white border-[1.5px] rounded-[4px] border-gray-500 peer peer-checked:border-0 peer-checked:bg-electric-violet-500">
									<img
										className=""
										src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
										alt="tick"
									/>
								</div>
								<span className="ml-2 font-normal text-gray-900">Mantenerme conectado</span>
							</label>
							<a href="#" className="font-medium text-electric-violet-500 cursor-pointer">
								¿Olvidaste la contraseña?
							</a>
						</div>
						<Buttom className="w-full py-4 text-center">Iniciar sesión</Buttom>
						<div className="flex items-center -my-3">
							<hr className="h-0 border-b border-solid border-gray-200 grow" />
							<p className="mx-4 text-grey-600">ó</p>
							<hr className="h-0 border-b border-solid border-gray-200 grow" />
						</div>
						<a className="flex items-center justify-center w-full py-4 mb-2 text-sm font-medium transition duration-300 cursor-pointer rounded-lg text-gray-700 bg-zumthor-100 hover:bg-zumthor-50 focus:ring-4 focus:ring-grey-300">
							<img
								className="h-5 mr-2"
								src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
								alt=""
							/>
							Iniciar sesión con Google
						</a>
						<p className="text-sm leading-relaxed text-center text-grey-900">
							¿Aún no estas suscrito?{" "}
							<Link to="/registro" className="font-bold text-electric-violet-500">
								Suscribirse
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
