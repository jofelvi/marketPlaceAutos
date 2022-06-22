import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './store/index'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import './index.css'

const prod = import.meta.env.PROD

const middleware = [thunk];
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
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
