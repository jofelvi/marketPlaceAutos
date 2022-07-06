import { regexEmail, regexNumber, regexString } from "../regex";

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
    } else if (!regexString.test(data.first_name)) {
        errors.first_name = 'El nombre sólo debe tener letras.';
    }

    if (!data.last_name) {
        errors.last_name = 'El apellido es requerido.';
    } else if (!regexString.test(data.last_name)) {
        errors.last_name = 'El apellido sólo debe tener letras.';
    }

    if (!data.identification) {
        errors.identification = 'La identificación es requerida.';
    } else if (!regexNumber.test(data.identification)) {
        errors.identification = 'La identificación sólo debe tener números.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    }
    else if (!regexEmail.test(data.email)) {
        errors.email = 'Por favor ingrese un email válido';
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
    } else if (!regexNumber.test(data.phone)) {
        errors.phone = 'Por favor ingrese un número de contacto válido.';
    }

    if (!data.social_name) {
        errors.social_name = 'La razón social es requerida.';
    }

    if (!data.identification) {
        errors.identification = 'La identificación es requerida.';
    } else if (!regexNumber.test(data.identification)) {
        errors.identification = 'La identificación sólo debe tener números.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    } else if (!regexEmail.test(data.email)) {
        errors.email = 'Por favor ingrese un email válido';
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