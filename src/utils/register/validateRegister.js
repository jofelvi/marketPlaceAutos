export const initialValuesBuyer = {
    first_name: '',
    last_name: '',
    identification: '',
    email: '',
    password: '',
    confirm_password: '',
    accept: false
}

export const initialValuesSeller = {
    business_name: '',
    phone: '',
    social_name: '',
    state: '',
    identification: '',
    email: '',
    password: '',
    confirm_password: '',
    ubication: '',
    accept: false
}

export const validateBuyer = (data) => {
    let errors = {};

    if (!data.first_name) {
        errors.first_name = 'El nombre es requerido.';
    }

    if (!data.last_name) {
        errors.last_name = 'El apellido es requerido.';
    }

    if (!data.identification) {
        errors.identification = 'La identificación es requerida.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Por favor ingrese un email válido. example@email.com';
    }

    if (!data.password) {
        errors.password = 'La contraseña es requerida.';
    }

    if (data.password !== data.confirm_password) {
        errors.confirm_password = 'Las contraseñas no coinciden.';
        errors.password = 'Las contraseñas no coinciden.';
    }

    if (!data.accept) {
        errors.accept = 'Por favor acepte los términos y condiciones.';
    }

    return errors;
}

export const validateSeller = (data) => {
    let errors = {};

    if (!data.business_name) {
        errors.business_name = 'El nombre de su empresa es requerido.';
    }

    if (!data.phone) {
        errors.phone = 'El número de contacto es requerido.';
    }
    
    if (!data.social_name) {
        errors.social_name = 'La razón social es requerida.';
    }

    if (!data.state) {
        errors.state = 'Es estado es requerido.';
    }

    if (!data.identification) {
        errors.identification = 'La identificación es requerida.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Por favor ingrese un email válido. example@email.com';
    }

    if (!data.password) {
        errors.password = 'La contraseña es requerida.';
    }

    if (data.password !== data.confirm_password) {
        errors.confirm_password = 'Las contraseñas no coinciden.';
        errors.password = 'Las contraseñas no coinciden.';
    }

    if (!data.ubication) {
        errors.ubication = 'La ubicación es requerida.';
    }

    if (!data.accept) {
        errors.accept = 'Por favor acepte los términos y condiciones.';
    }

    return errors;
}