import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import "../index.css"


function App() {
    return (  
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;