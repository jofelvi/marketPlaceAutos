import {CARGANDO, DECREMENTAR, GETPOKEMONS, INCREMENTAR, SAVETHEME, SAVEUSER} from "./constants";

export const INITIAL_STATE = {
   theme: [""],
    user: {
        email: "admin@gmail.com",
        name: "admin",
    },
    incrementar: 1,
    decrementar: 2,
    value: 0,
    pokemons: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVETHEME:
            return {...state, theme:  action.payload};
     /*   case SAVETHEME:
            return {...state, theme:  [...state.theme, ...action.payload]};
        case SAVEUSER:*/
            return {...state, user: {...state.user, ...action.payload}};
        case INCREMENTAR:
            return {...state, value:  action.payload};
        case DECREMENTAR:
            return {...state, value:  action.payload};
        case GETPOKEMONS:
            return {...state, pokemons:  action.payload};
        case CARGANDO:
            return {...state, loading:  action.payload};

        default:
            return state;
    }
};
