import {
    GET_PUBLICATIONS_USER,
    GET_PUBLICATIONS_USER_ERROR,
    GET_PUBLICATIONS_USER_LOADING,
    GET_FAVORITES_USER,
    GET_FAVORITES_USER_ERROR,
    GET_FAVORITES_USER_LOADING
} from "./types";

export const INITIAL_STATE = {
    publications: [],
    loading: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PUBLICATIONS_USER_LOADING:
            return { ...state, loading: action.payload };
        case GET_PUBLICATIONS_USER:
            return { ...state, publications: action.payload };
        case GET_PUBLICATIONS_USER_ERROR:
            return { ...state, error: action.payload };
        case GET_FAVORITES_USER_LOADING:
            return { ...state, loading: action.payload };
        case GET_FAVORITES_USER:
            return { ...state, publications: action.payload };
        case GET_FAVORITES_USER_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
