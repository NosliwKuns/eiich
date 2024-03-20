import { LoginTouched } from "@/components/Input";
import { Login } from "@/pages/login/Login";

export const validate = (values: Login, touched: LoginTouched) => {
    let valid = true;
    const errors = { email: "", password: "" };

    if (!values.email && touched.email) {
        valid = false;
        errors.email = "Este campo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email) && touched.email) {
        valid = false;
        errors.email = "Correo electrónico no válido";
    }

    if (!values.password && touched.password) {
        valid = false;
        errors.password = "Este campo es requerido";
    } else if (values.password.length < 8 && touched.password) {
        valid = false;
        errors.password = "Debe tener al menos 8 caracteres";
    }

    return { valid, errors };
};