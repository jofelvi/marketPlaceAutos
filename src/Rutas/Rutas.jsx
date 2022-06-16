import React from 'react';
import App from "../App";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import PageOne from "../components/page1";
import PageTwo from "../components/page2";

const Rutas = (props) => {

    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route element={<Layout />}>
                <Route index element={<PageOne />} />
                <Route  path="/page2" element={<PageTwo />} />
            </Route>
        </Routes>
    )
}

export default Rutas;
