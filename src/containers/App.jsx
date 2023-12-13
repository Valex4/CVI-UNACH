import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FormacionAcademica from "../pages/FormacioAcademica";
import TecnologicaInnovacion from "../pages/TecnologicaInnovacion";


import "../assets/styles/index.css"


function App() {
    return (  
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/formacionAcademica" element={<FormacionAcademica/>}/>
                    <Route path="/tecnoInnova" element={<TecnologicaInnovacion/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;