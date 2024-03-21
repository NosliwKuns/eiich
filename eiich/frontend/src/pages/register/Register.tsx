import { Input, Touched } from "@/components/Input"
import { Buttom } from "@/components/ui/Buttom"
import { Typography } from "@/components/ui/Typography"
import { FormEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"
import { validate } from "@/validations/register"
import { Login } from "../login/Login"
import { InputErrorMessage } from "@/components/InputErrorMessage"

export interface Register extends Login {
	repeatPassword: string
}

export const Register = () => {
	const [values, setValue] = useState<Register>({
		email: "",
		password: "",
		repeatPassword: "",
	})

	const [errors, setErrors] = useState<Register>({
		email: "",
		password: "",
		repeatPassword: "",
	})

	const [touched, setTouched] = useState<Touched>({
		email: false,
		password: false,
		repeatPassword: false,
	})

	const { errors: ValidateErrors, valid } = validate(values, touched)

	const [isCheckedTerms, setIsCheckedTerms] = useState(false)
	// const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		setTouched({ ...touched, email: true, password: true, repeatPassword: true })
		setErrors(ValidateErrors)
		if (valid) {
			alert("Formulario enviado")
		}
	}

	useEffect(() => {
		if (touched.email || touched.password || touched.repeatPassword) {
			setErrors(ValidateErrors)
		}
	}, [touched, ValidateErrors])

	return (
		<div className="relative flex bg-babyBlue min-h-screen rounded-lg py-28">
			<Link
				to="/"
				className="fixed top-3 left-3 flex items-center </div>gap-2 bg-white rounded-lg font-semibold py-2 px-4 border-2 text-elc-500 border-electric-violet-500"
			>
				<IoArrowBack /> Ir a inicio
			</Link>
			<div className="m-auto p-12 bg-white max-w-[480px] rounded-2xl transition-all">
				<div className="flex items-center xl:p-10">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6 w-full bg-white rounded-3xl transition-all"
					>
						<Typography className="mb-2 font-extrabold text-dark-grey-900 text-center" text="text-[29.5px]">
							Hazte miembro y accede a beneficios exclusivos
						</Typography>
						<div>
							<Input
								label="Correo electrónico*"
								type="email"
								name="email"
								value={values.email}
								setValue={setValue}
								setTouched={setTouched}
								errors={errors}
							/>
							<InputErrorMessage errorMessage={errors.email} />
						</div>
						<div>
							<Input
								label="Contraseña*"
								type="password"
								name="password"
								value={values.password}
								setValue={setValue}
								setTouched={setTouched}
								errors={errors}
							/>
							<InputErrorMessage errorMessage={errors.password} />
						</div>
						<div>
							<Input
								label="Repetir contraseña*"
								type="password"
								name="repeatPassword"
								value={values.repeatPassword}
								setValue={setValue}
								setTouched={setTouched}
								errors={errors}
							/>
							<InputErrorMessage errorMessage={errors.repeatPassword} />
						</div>

						<div className="mb-4">
							<div className="flex ">
								<label className="relative inline-flex text-xs items-center cursor-pointer select-none">
									<input
										type="checkbox"
										checked={isCheckedTerms}
										className="sr-only peer"
										onChange={() => setIsCheckedTerms(!isCheckedTerms)}
									/>
									<div className="w-4 h-4 bg-white border-[1.5px] rounded-[4px] border-gray-500 peer peer-checked:border-0 peer-checked:bg-electric-violet-500">
										<img
											className=""
											src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
											alt="tick"
										/>
									</div>
									<span className="ml-2 font-normal text-gray-900">
										<Link
											to={"/terminos-y-condiciones"}
											className="text-electric-violet-500 font-semibold"
										>
											Términos y condiciones
										</Link>
										{" "}y{" "}
										<Link
											to={"/politica-de-privacidad"}
											className="text-electric-violet-500 font-semibold"
										>
											Política de privacidad
										</Link>
									</span>
								</label>

								{/* <label className="relative inline-flex text-xs items-center cursor-pointer select-none">
									<input
										type="checkbox"
										checked={isCheckedPrivacy}
										className="sr-only peer"
										onChange={() => setIsCheckedPrivacy(!isCheckedPrivacy)}
									/>
									<div className="w-4 h-4 bg-white border-[1.5px] rounded-[4px] border-gray-500 peer peer-checked:border-0 peer-checked:bg-electric-violet-500">
										<img
											className=""
											src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
											alt="tick"
										/>
									</div>
									<span className="ml-2 font-normal text-gray-900">
										<Link
											to={"/politica-de-privacidad"}
											className="text-electric-violet-500 font-semibold"
										>
											Política de privacidad
										</Link>
									</span>
								</label> */}
							</div>
							{/* <InputErrorMessage errorMessage="Este campo es requerido" /> */}
						</div>
						<Buttom type="submit" className="w-full py-4 text-center">
							Suscribirme
						</Buttom>
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
							Suscribirse con Google
						</a>
						<p className="text-sm leading-relaxed text-center text-grey-900">
							¿Ya tienes cuenta?{" "}
							<Link to="/iniciar-sesion" className="font-bold text-electric-violet-500">
								Iniciar sesión
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
