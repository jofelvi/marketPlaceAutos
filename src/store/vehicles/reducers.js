import {
    GET_VEHICLE,
    GET_VEHICLES,
    GET_VEHICLES_ERROR,
    GET_VEHICLES_LOADING,
    GET_VEHICLE_ERROR,
    SELECTED_VEHICLE
} from "./types";

export const INITIAL_STATE = {
    vehicles: [],
    loading: false,
    error: "",
    selectedVehicle: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_VEHICLES:
            return { ...state, vehicles: action.payload };
        case GET_VEHICLES_LOADING:
            return { ...state, loading: action.payload };
        case GET_VEHICLES_ERROR:
            return { ...state, error: action.payload };
        case SELECTED_VEHICLE:
            return { ...state, selectedVehicle: action.payload };
        case GET_VEHICLE:
            return { ...state, selectedVehicle: action.payload };
        case GET_VEHICLE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
