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
} from "./Constants";
import auth from "../../Auth/Auth";

export const INITIAL_STATE = {
  profile: {
    name: "",
    email: "",
    token: auth.getToken(),
    expiresAt: "",
    roles: [auth.getRoles()]
  },
  loading: false,
  error: "",
  isAuthenticated: false,
  loginFaile: false
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
      return { ...state, loginFaile: action.payload };
    default:
      return state;
  }
};
