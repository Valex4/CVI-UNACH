import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FormacionAcademica from "../pages/FormacionAcademica";
import TecnologicaInnovacion from "../pages/TecnologicaInnovacion";
import TrayectoriaProfesional from "../pages/TrayectoriaProfesional";
import GeneralData from "../pages/GeneralData.";
import Cientifica from "../pages/Cientifica";
import Vinculacion from "../pages/Vinculacion";
import Difusion from "../pages/Difusion";
import Cursos from "../pages/Cursos";
import Diplomados from "../pages/Diplomados";
import Distinciones from "../pages/Distinciones";
import Idiomas from "../pages/Idiomas";

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
                    <Route path="/formacionAcademica/gradosAcademicos" element={<FormacionAcademica/>}/>
                    <Route path="/tecnoInnova" element={<TecnologicaInnovacion/>}/>
                    <Route path="/domicilioResidencia" element={<DomicilioResidencia/>} />
                    <Route path="/trayectoriaProfesional" element={<TrayectoriaProfesional/>}/>
                    <Route path="/datosGenerales" element={<GeneralData/>}/>
                    <Route path="/cientifica" element={<Cientifica/>}/>
                    <Route path="/proyectosInvestigacion" element={<Vinculacion/>}/>
                    <Route path="/pCongresos" element={<Difusion/>}/>
                    <Route path="/cursos" element={<Cursos/>}/>
                    <Route path="/diplomados" element={<Diplomados/>}/>
                    <Route path="/distinciones" element={<Distinciones/>}/>
                    <Route path="/idiomas" element={<Idiomas/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;