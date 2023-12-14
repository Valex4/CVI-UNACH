import React, { useState } from "react";
import LinkDashboard from "../atoms/LinkDashboard";
import logo from "../../assets/images/UnachAzul.png"



function Dash() {

  return (
    <>
         <header>
                <nav className="bg-[#18386B] border-[#18386B] h-[68px] fixed w-full top-0">
                <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl">
                    <a href="https://www.unach.mx/" className="flex items-center">
                    <img  className="mx-auto h-[90px] w-auto" alt="Unach Logo" />
                    </a>
                </div>
                </nav>
        </header>
      <nav
        id="sidenav-1"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#18386B] "
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <ul className="relative m-0 list-none px-[0.2rem] " data-te-sidenav-menu-ref>
            <li>
              <img src={logo} alt="Logo Unach" />
            </li>
          <li className="relative">
            <LinkDashboard options={2} lines={["Datos Generales"]} name1={"Datos Generales"} name2={"Domicilio de Residencia"} to={"/datosGenerales"} to2={"/domicilioResidencia"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={2} lines={["Formación Academica"]} name1={"Grados Academicos"} name2={"Otro"} to={"/formacionAcademica/gradosAcademicos"} to2={"/formacionAcademicaOtros"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Trayectoria Profesional"]} to={"/trayectoriaProfesional"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={2} lines={["Producción científica, ","tecnológica y de", "innovación"]} name1={"Cientifica"} name2={"Tecnológica y innovación"} to={"/cientifica"} to2={"/tecnoInnova"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={3} lines={["Formación de personas"]} name1={"Cursos"} name2={"Tesis"} name3={"Diplomados"} to={"/cursos"} to3={"/diplomados"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Comunicación pública", "de la ciencia, tecnológica", "y de innovación"]}  to={"/pCongresos"} />
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Vinculación"]} to={"/proyectosInvestigación"} />
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Evaluciones"]} to={"/evalucacioes"}/> 
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Premios y distinciones"]} to={"/distinciones"}/>
          </li>
          <li className="relative">
            <LinkDashboard options={0} lines={["Lenguas e idiomas"]} to={"/idiomas"}/>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dash;
