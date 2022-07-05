import {
    GET_VEHICLE,
    GET_VEHICLES,
    GET_VEHICLES_ERROR,
    GET_VEHICLES_LOADING,
    GET_VEHICLE_ERROR,
    SELECTED_VEHICLE
} from "./types";
import axios from "axios";

export const getVehicles = () => async dispatch => {
    dispatch({
        type: GET_VEHICLES_LOADING,
        payload: true
    });

    try {
        const response = await axios.get('/api/recentCars.json')
        console.log(response.data.results);
        dispatch({
            type: GET_VEHICLES,
            payload: response.data.results
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_VEHICLES_LOADING,
            payload: true
        });
        dispatch({
            type: GET_VEHICLES_ERROR,
            payload: error
        });
    }
};

export const selectedVehicle = (vehicle) => async dispatch => {
    dispatch({
        type: SELECTED_VEHICLE,
        payload: vehicle
    })
};

export const getInfoVehicleById = (id) => async dispatch => {
    try {
        const response = await axios.get('/api/recentCars.json')
        
        const searchVehicle = response.data.results[id - 1];
        dispatch({
            type: GET_VEHICLE,
            payload: searchVehicle
        });
    } catch (error) {
        dispatch({
            type: GET_VEHICLE_ERROR,
            payload: error
        });
    }
};
