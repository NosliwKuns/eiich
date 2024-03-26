import { ComplaintsBook } from "@/components/ComplaintsBook"
import { Container } from "@/components/ui/Container"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"

export const Footer = () => {
	return (
		<footer className="bg-[#0f0730] text-white text-sm mt-12">
			<Container>
				<div className="flex flex-col md:flex-row gap-12 justify-between py-12">
					<h1 className="text-white text-6xl">Eiich</h1>
					<div>
						<h4 className="text-vividIndigo mb-3 text-[17px] font-semibold">
							Acerca de Eiich
						</h4>
						<ul>
							<li className="mb-2 hover:text-vividIndigo transition-colors">
								<a href="#">Términos y condiciones</a>
							</li>
							<li className="mb-2 hover:text-vividIndigo transition-colors">
								<a href="#">Políticas de privacidad</a>
							</li>
							<li className="hover:text-vividIndigo transition-colors">
								<a href="#">Preguntas frecuentes</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-vividIndigo mb-3 text-[17px] font-semibold">
							Contáctanos
						</h4>
						<ul className="flex flex-col">
							<li className="mb-2 hover:text-vividIndigo transition-colors">
								<a href="#">Soporte</a>
							</li>
							<span className="text-[12px] font-semibold leading-4">
								Horario de atención
							</span>
							<span className="text-[11px] leading-3">
								Lunes a viernes
							</span>
							<span className="text-[11px] leading-4">
								9:00 AM - 6:00 PM
							</span>
						</ul>
					</div>
					<div>
						<a href="#" className="flex flex-col md:items-center group">
							<ComplaintsBook
								className="fill-white group-hover:fill-vividIndigo transition-colors"
								secondColor="yellow"
								height={35}
								width={35}
							/>
							<span className="md:text-center group-hover:text-vividIndigo transition-colors">
								Libro de <br /> reclamaciones{" "}
							</span>
						</a>
						<div className="mt-3">
							<p>FREIICORP S.A.C</p>
							<p>
								<span className="font-semibold">RUC:</span> 20612095192
							</p>
						</div>
					</div>
				</div>
				<hr className="border-none h-[1px] bg-vividIndigo/30" />
				<div className="flex py-6 gap-3 items-center">
					<span>Síguenos:</span>
					<div className="flex gap-2">
						<a className="aspect-square p-2 bg-vividIndigo/50 w-fit inline-block rounded-full">
							<FaFacebookF className="text-white" />
						</a>
						<a className="aspect-square p-2 bg-vividIndigo/50 w-fit inline-block rounded-full">
							<FaInstagram className="text-white" />
						</a>
						<a className="aspect-square p-2 bg-vividIndigo/50 w-fit inline-block rounded-full">
							<FaTiktok className="text-white" />
						</a>
					</div>
				</div>
			</Container>
			<div className="bg-[#1e1252] py-3">
				<Container>
					<p className="text-center">
						&copy; {new Date().getFullYear()} Eiich. Todos los
						derechos reservados.
					</p>
				</Container>
			</div>
		</footer>
	)
}
