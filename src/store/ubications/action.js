import {
    GET_CITIES,
    GET_CITIES_ERROR,
    GET_CITIES_LOADING
} from "./types";
import axios from "axios";

export const getCities = () => async dispatch => {
    dispatch({
        type: GET_CITIES_LOADING,
        payload: true
    });

    try {
        const response = await axios.get('/api/statesCity.json')
        dispatch({
            type: GET_CITIES,
            payload: response.data.results
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_CITIES_LOADING,
            payload: true
        });
        dispatch({
            type: GET_CITIES_ERROR,
            payload: error
        });
    }
};
