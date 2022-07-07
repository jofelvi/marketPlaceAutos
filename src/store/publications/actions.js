import {
    GET_FAVORITES_USER,
    GET_FAVORITES_USER_ERROR,
    GET_FAVORITES_USER_LOADING,
    GET_PUBLICATIONS_USER,
    GET_PUBLICATIONS_USER_ERROR,
    GET_PUBLICATIONS_USER_LOADING
} from "./types";
import axios from 'axios';

export const getPublicationsByUser = () => async dispatch => {
    dispatch({
        type: GET_PUBLICATIONS_USER_LOADING,
        payload: true,
    });

    try {
        const response = await axios.get('/api/publications.json');

        dispatch({
            type: GET_PUBLICATIONS_USER,
            payload: response.data.results,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_PUBLICATIONS_USER_LOADING,
            payload: false,
        });
        dispatch({
            type: GET_PUBLICATIONS_USER_ERROR,
            payload: error,
        });
    }
};

export const getFavoritesByUser = () => async dispatch => {
    dispatch({
        type: GET_FAVORITES_USER_LOADING,
        payload: true,
    });

    try {
        const response = await axios.get('/api/favorites.json');

        dispatch({
            type: GET_FAVORITES_USER,
            payload: response.data.results,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_FAVORITES_USER_LOADING,
            payload: false,
        });
        dispatch({
            type: GET_FAVORITES_USER_ERROR,
            payload: error,
        });
    }
};
