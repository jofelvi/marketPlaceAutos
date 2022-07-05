import { regexEmail, regexNumber, regexString } from "../regex";

export const initialValuesPublishVehicle = {
    first_name: '',
    last_name: '',
    email: '',
    ubication: '',
    phone: '',

    brand: '',
    model: '',
    year: '',

    km: '',
    state: '',
    price: '',

    cylinders: '',
    owners: '',
    inside_color: '',
    outside_color: '',

    description: '',

    imgFront: null,
    imgLeft: null,
    imgRight: null
}

export const validatePublishVehicleStepOne = (data) => {
    let errors = {};

    if (!data.first_name) {
        errors.first_name = 'El nombre es requerido.';
    } else if (!regexString.test(data.first_name)) {
        errors.first_name = 'El nombre es sólo debe contener letras.';
    }

    if (!data.last_name) {
        errors.last_name = 'El apellido es requerido.';
    } else if (!regexString.test(data.last_name)) {
        errors.last_name = 'El apellido es sólo debe contener letras.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    } else if (!regexEmail.test(data.email)) {
        errors.email = 'Por favor ingrese un correo válido.';
    }

    if (!data.ubication) {
        errors.ubication = 'La ubicación es requerida.';
    }

    if (!data.phone) {
        errors.phone = 'El número telefónico es requerido.';
    } else if (!regexNumber.test(data.phone)) {
        errors.phone = 'Por favor agregue un teléfono válido';
    }

    return errors;
}

export const validatePublishVehicleStepTwo = (data) => {
    let errors = {};

    if (!data.brand) {
        errors.brand = 'La marca del vehículo es requerida.';
    }

    if (!data.model) {
        errors.model = 'La modelo del vehículo es requerido.';
    }

    if (!data.year) {
        errors.year = 'El año del vehículo es requerido.';
    }
    if (!data.km) {
        errors.km = 'El kilometraje del vehículo es requerido.';
    } else if (!regexNumber.test(data.km)) {
        errors.km = 'Por favor indique un kilometraje válido.';
    }

    if (!data.state) {
        errors.state = 'El estado del vehículo es requerido.';
    }

    if (!data.price) {
        errors.price = 'El precio del vehículo es requerido.';
    } else if (!regexNumber.test(data.price)) {
        errors.price = 'Por favor indique un monto válido.';
    }

    if (!data.cylinders) {
        errors.cylinders = 'Los cilindros del vehículo son requeridos.';
    } else if (!regexNumber.test(data.cylinders)) {
        errors.cylinders = 'Este campo sólo acepta números.';
    }

    if (!data.owners) {
        errors.owners = 'Los dueños del vehículo son requeridos.';
    } else if (!regexNumber.test(data.owners)) {
        errors.owners = 'Este campo sólo acepta números.';
    }

    if (!data.outside_color) {
        errors.outside_color = 'El color del vehículo es requerido.';
    } else if (!regexString.test(data.outside_color)) {
        errors.outside_color = 'Este campo sólo acepta letras.';
    }

    if (!data.description) {
        errors.description = 'La descripción del vehículo es requerida.';
    }

    return errors;
}

export const validatePublishVehicleStepThree = (data) => {
    let errors = {};

    if (!data.imgFront) {
        errors.imgFront = 'La imagen frontal del vehículo es requerida.';
    }

    if (!data.imgLeft) {
        errors.imgLeft = 'La imagen lateral izquierda del vehículo es requerida.';
    }

    if (!data.imgRight) {
        errors.imgRight = 'La imagen lateral derecha del vehículo es requerida.';
    }

    return errors;
}