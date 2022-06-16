import {
  ERROR,
  LOADING,
  PROFILE,
  AUTHENTICATED,
  ROLES,
  LOGINFAILE,
  TOKEN
} from "./Constants";
import axios from "axios";
import env from "../../environment";

export const loginRedux = (username, password) => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  let response = await axios
    .post(`${env.api.url}/v1/auth/login`, { username, password })
    .then(respuesta => {
      if (respuesta.data.success) {
        localStorage.setItem("access_token", respuesta.data.data.token);
        localStorage.setItem("expiresAt", respuesta.data.data.expiresAt);
        localStorage.setItem("roles", respuesta.data.data.profile.roles);
        localStorage.setItem(
          "profile",
          JSON.stringify(respuesta.data.data.profile)
        );
        dispatch({
          type: PROFILE,
          payload: respuesta.data.data
        });
        dispatch({
          type: LOADING,
          payload: false
        });

        return respuesta.data;
      } else {
        return respuesta.data;
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: error
      });
      dispatch({
        type: LOADING,
        payload: false
      });
    });
  return response;
};

export const resetPasswordRedux =
  (token, email, password) => async dispatch => {
    dispatch({
      type: LOADING,
      payload: true
    });
    let response = await axios
      .post(`${env.api.url}/v1/auth/reset-password`, { token, email, password })
      .then(respuesta => {
        dispatch({
          type: LOADING,
          payload: false
        });
        return respuesta.data;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          payload: error.message
        });
        dispatch({
          type: LOADING,
          payload: false
        });
      });
    if (!response) {
      return false;
    } else {
      return true;
    }
  };

export const restorePasswordRedux = email => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  //let response = await axios.post(`${env.api.url}/v1/auth/restore-password`, email)
  let response = await axios
    .post(`${env.api.url}/v1/auth/restore-password`, email)
    .then(respuesta => {
      dispatch({
        type: LOADING,
        payload: false
      });
      return respuesta.data;
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: error.message
      });
      dispatch({
        type: LOADING,
        payload: false
      });
    });

  if (!response) {
    return false;
  } else {
    return true;
  }
};

export const resetProfileRedux = () => async dispatch => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expiresAt");
  localStorage.removeItem("profile");
  localStorage.removeItem("roles");

  dispatch({
    type: PROFILE,
    payload: []
  });
  dispatch({
    type: AUTHENTICATED,
    payload: false
  });
  dispatch({
    type: ROLES,
    payload: []
  });
};

export const LoginReduxError = () => async dispatch => {
  dispatch({
    type: LOGINFAILE,
    payload: true
  });
};

export const LoginReduxErrorReset = () => async dispatch => {
  dispatch({
    type: LOGINFAILE,
    payload: false
  });
};
