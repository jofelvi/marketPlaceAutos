import {
  ERROR,
  LOADING,
  PROFILE,
  AUTHENTICATED,
  ROLES,
  LOGINFAILE
} from "./types";
import axios from "axios";
import { INITIAL_STATE } from "./reducers";
import { getInfoProfile } from "../../utils/auth/getInfoProfile";

export const loginRedux = (username, password) => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  });

  try {
    const response = await axios.post(`/api/infoUser.json`, { username, password });
    console.log(response.data);

    dispatch({
      type: PROFILE,
      payload: response.data.result
    });

    dispatch({
      type: AUTHENTICATED,
      payload: true
    });

    setTimeout(() => {
      localStorage.setItem('profile', JSON.stringify(response.data.result));
      localStorage.setItem('access_token', response.data.result.access_token);

      dispatch({
        type: LOADING,
        payload: false
      });

    }, 2000);

  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADING,
      payload: false
    });
    dispatch({
      type: LOGINFAILED,
      payload: 'Usuario o contraseña incorrectos'
    });
  }
};

export const getInfoUser = () => async dispatch => {
  const profile = getInfoProfile();

  dispatch({
    type: PROFILE,
    payload: profile
  });

  dispatch({
    type: AUTHENTICATED,
    payload: true
  });
};

export const setInfoProfile = (formik) => async dispatch => {
  const profile = getInfoProfile();
  formik.values.access_token = profile.access_token
  formik.values.bookings_vehicles = profile.bookings_vehicles
  formik.values.favorite_vehicles = profile.favorite_vehicles
  formik.values.financial_income = profile.financial_income
  formik.values.first_name = profile.first_name
  formik.values.id = profile.id
  formik.values.identification = profile.identification
  formik.values.last_name = profile.last_name
  formik.values.phone = profile.phone
  formik.values.roles = profile.roles
  formik.values.sold_vehicles = profile.sold_vehicles
  formik.values.username = profile.username
  formik.values.ubication = profile.ubication
  formik.values.email = profile.email
  console.log('formik', formik);
  // formik.values[name] = acceptedFiles[0]
  // formik.setTouched({ ...formik.touched, [name]: false });

};

export const logoutRedux = (username, password) => dispatch => {

  localStorage.clear()

  dispatch({
    type: PROFILE,
    payload: INITIAL_STATE.profile
  });

  dispatch({
    type: AUTHENTICATED,
    payload: false
  });

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
