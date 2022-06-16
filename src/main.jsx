import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './store/index'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {BrowserRouter} from "react-router-dom";
import Rutas from "./Rutas/Rutas";

const prod = import.meta.env.PROD

const middleware = [ thunk ];
if (!prod) {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Rutas>
                  <App />
              </Rutas>
          </BrowserRouter>
      </Provider>,
  </React.StrictMode>
)
