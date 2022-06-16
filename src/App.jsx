import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.css'
import {decrementarAction, getPokemons, incrementarAction, saveTheme, saveUser} from "./store/shared/actions";
import Example from "./components/example";
import Loading from "./components/cargando";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageOne from "./components/page1";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PageTwo from "./components/page2";

const themeState = {
    type: 'dark'
}

function App() {

  const dispatch = useDispatch()
  const {theme, user, value, incrementar, decrementar} = useSelector((state) => state.shared);

  useEffect(()=>{
      dispatch(getPokemons())
  },[])


    return (
        <Routes>
            {
                // here public router
            }


        </Routes>
  )
}

export default App
