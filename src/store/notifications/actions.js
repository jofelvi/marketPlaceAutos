import {
    ACTION_ERROR,
    ACTION_INFO,
    ACTION_SUCCESS
} from "./types";

export const successModal = (info) => async dispatch => {
    dispatch({
        type: ACTION_SUCCESS,
        value: true,
        info: info
    });
};

export const infoModal = (info) => async dispatch => {
    dispatch({
        type: ACTION_INFO,
        value: true,
        info: info
    });
};

export const errorModal = (info) => async dispatch => {
    dispatch({
        type: ACTION_ERROR,
        value: true,
        info: info
    });
};

export const closeSuccessModal = () => async dispatch => {
    dispatch({
        type: ACTION_SUCCESS,
        value: false,
        info: {
            title: '',
            description: '',
            image: null,
            type: ''
        }
    });
};

export const closeInfoModal = () => async dispatch => {
    dispatch({
        type: ACTION_INFO,
        value: false,
        info: {
            title: '',
            description: '',
            image: null,
            type: ''
        }
    });
};

export const closeErrorModal = () => async dispatch => {
    dispatch({
        type: ACTION_ERROR,
        value: false,
        info: {
            title: '',
            description: '',
            image: null,
            type: ''
        }
    });
};
