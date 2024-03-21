import { Touched } from "@/components/Input"
import { Register } from "@/pages/register/Register"

export const validate = (values: Register, touched: Touched) => {
    let valid = true
    const errors = { email: "", password: "", repeatPassword: "" }

    if (!values.email && touched.email) {
        valid = false
        errors.email = "Este campo es requerido"
    } else if (!/\S+@\S+\.\S+/.test(values.email) && touched.email) {
        valid = false
        errors.email = "Correo electrónico no válido"
    }

    if (!values.password && touched.password) {
        valid = false
        errors.password = "Este campo es requerido"
    } else if (
        values.password.length < 8 &&
        touched.password
    ) {
        valid = false
        errors.password =
            "La contraseña debe tener al menos 8 caracteres"
    } else if (
        !/[A-Z]/.test(values.password) &&
        touched.password
    ) {
        valid = false
        errors.password =
            "Al menos una letra mayúscula"
    } else if (
        !/[a-z]/.test(values.password) &&
        touched.password
    ) {
        valid = false
        errors.password =
            "Al menos una letra minúscula"
    } else if (
        !/\d/.test(values.password) &&
        touched.password
    ) {
        valid = false
        errors.password =
            "Al menos un número"
    }

    if (!values.repeatPassword && touched.repeatPassword) {
        valid = false
        errors.repeatPassword = "Este campo es requerido"
    } else if (values.repeatPassword !== values.password && touched.repeatPassword) {
        valid = false
        errors.repeatPassword = "Las contraseñas no coinciden"
    }

    return { valid, errors }
}

