import {CARGANDO, DECREMENTAR, GETPOKEMONS, INCREMENTAR, SAVETHEME, SAVEUSER} from "./constants";
import {pokemonApiCall} from "../../api/pokemonApi";

export const saveTheme = (obj) => async (dispatch) => {
    console.log("saveTheme", obj)

    await dispatch({
        type: SAVETHEME,
        payload: [obj]
    });
}

export const saveThemeTest = (obj) => async (dispatch) => {
    console.log("saveTheme", obj)
    await dispatch({
        type: SAVETHEME,
        payload: obj
    });
}

export const saveUser = (obj) => async (dispatch) => {
    console.log("saveTheme", obj)
    await dispatch({
        type: SAVEUSER,
        payload: {...obj}
    });
}

export const inCrementarRedux = (obj) => async (dispatch) => {
    console.log("saveTheme", obj)
    await dispatch({
        type: SAVEUSER,
        payload: {...obj}
    });
}

export const incrementarAction = (obj) => async (dispatch) => {
    console.log("incrementarAction", obj)
    await dispatch({
        type: INCREMENTAR,
        payload: obj
    });
}

export const decrementarAction = (obj) => async (dispatch) => {
    console.log("decrementarAction", obj)
    await dispatch({
        type: DECREMENTAR,
        payload: obj
    });
}

export const getPokemons = () => async (dispatch, getState) => {

    console.log("getPokemons")
    await dispatch({
        type: CARGANDO,
        payload: true
    });

    let pokemons = await pokemonApiCall()
    console.log("pokemons0", pokemons)

    await dispatch({
        type: GETPOKEMONS,
        payload: pokemons
    });

    await dispatch({
        type: CARGANDO,
        payload: false
    });
}





