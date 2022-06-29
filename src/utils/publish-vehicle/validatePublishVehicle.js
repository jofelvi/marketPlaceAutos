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
    if (!data.km) {
        errors.km = 'El kilometraje del vehículo es requerido.';
    }

    if (!data.state) {
        errors.state = 'El estado del vehículo es requerido.';
    }

    if (!data.price) {
        errors.price = 'El precio del vehículo es requerido.';
    }
    if (!data.cylinders) {
        errors.cylinders = 'Los cilindros del vehículo son requeridos.';
    }

    if (!data.owners) {
        errors.owners = 'Los dueños del vehículo son requeridos.';
    }

    if (!data.inside_color) {
        errors.inside_color = 'El color interior del vehículo es requerido.';
    }

    if (!data.outside_color) {
        errors.outside_color = 'El color exterior del vehículo es requerido.';
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