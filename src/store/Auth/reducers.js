import {
  ERROR,
  EXPIRES_AT,
  LOADING,
  PROFILE,
  AUTHENTICATED,
  PROFILERESET,
  ROLES,
  LOGINFAILE,
  TOKEN
} from "./types";

export const INITIAL_STATE = {
  profile: {
    id: null,
    first_name: "",
    last_name: "",
    username: "",
    identification: "",
    phone: "",
    favorite_vehicles: [],
    bookings_vehicles: [],
    sold_vehicles: [],
    financial_income: 0,
    roles: [],
    access_token: null
  },
  loading: false,
  error: "",
  isAuthenticated: false,
  loginFailed: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE:
      return { ...state, profile: action.payload };
    case PROFILERESET:
      return { ...state, profile: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case TOKEN:
      return { ...state, token: action.payload };
    case EXPIRES_AT:
      return { ...state, expiresAt: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case ROLES:
      return { ...state, roles: action.payload };
    case LOGINFAILE:
      return { ...state, loginFailed: action.payload };
    default:
      return state;
  }
};
