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

export const validatePublishVehicleStepOne = (data) => {
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

    return errors;
}