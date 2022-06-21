export const initialValuesLogin = {
    email: '',
    password: ''
}

export const validateLogin = (data) => {
    let errors = {};

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Por favor ingrese un email válido. example@email.com';
    }

    if (!data.password) {
        errors.password = 'La contraseña es requerido.';
    }
    return errors;
}