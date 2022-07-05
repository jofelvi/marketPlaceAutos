import {
    GET_CITIES,
    GET_CITIES_ERROR,
    GET_CITIES_LOADING
} from "./types";

export const INITIAL_STATE = {
    cities: [],
    loading: false,
    error: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CITIES:
            return { ...state, cities: action.payload };
        case GET_CITIES_LOADING:
            return { ...state, loading: action.payload };
        case GET_CITIES_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
