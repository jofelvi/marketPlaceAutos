import { regexEmail } from "../regex";

export const initialValuesLogin = {
    email: '',
    password: ''
}

export const validateLogin = (data) => {
    let errors = {};

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    } else if (!regexEmail.test(data.email)) {
        errors.email = 'Por favor ingrese un correo válido.';
    }

    if (!data.password) {
        errors.password = 'La contraseña es requerido.';
    }
    return errors;
}