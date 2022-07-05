import {
    ACTION_ERROR,
    ACTION_INFO,
    ACTION_SUCCESS
} from "./types";

export const INITIAL_STATE = {
    showModal: false,
    info: {
        title: '',
        description: '',
        image: null
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_SUCCESS:
            return { ...state, showModal: action.value, info: action.info };
        case ACTION_INFO:
            return { ...state, showModal: action.value, info: action.info };
        case ACTION_ERROR:
            return { ...state, showModal: action.value, info: action.info };
        default:
            return state;
    }
};
