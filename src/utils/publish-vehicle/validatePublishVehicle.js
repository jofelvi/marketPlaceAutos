export const initialValuesPublishVehicle = {
    first_name: '',
    last_name: '',
    email: '',
    ubication: '',
    phone: '',

    brand: '',
    model: '',
    year: '',
    
}

export const validatePublishVehicle = (data) => {
    let errors = {};

    if (!data.first_name) {
        errors.first_name = 'El nombre es requerido.';
    }

    if (!data.last_name) {
        errors.last_name = 'El apellido es requerido.';
    }

    if (!data.email) {
        errors.email = 'El correo electrónico es requerido.';
    }

    if (!data.ubication) {
        errors.ubication = 'La ubicación es requerida.';
    }

    if (!data.phone) {
        errors.phone = 'El número telefónico es requerido.';
    }

    return errors;
}