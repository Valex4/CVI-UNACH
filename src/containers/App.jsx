import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FormacionAcademica from "../pages/FormacioAcademica";
import TecnologicaInnovacion from "../pages/TecnologicaInnovacion";


import "../assets/styles/index.css"
import DomicilioResidencia from "../pages/DomicilioResidencia";


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
                    <Route path="/domicilioResidencia" element={<DomicilioResidencia/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;