import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

//Grupos de investigación

export const createGrupoInvestigacion = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/gruposInvestigacion/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getGruposInvestigacion = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/gruposInvestigacion/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteGrupoInvestigacion = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/gruposInvestigacion/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Redes de investigacion

export const createRedesInvestigacion = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/redesInvestigacion/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getRedesInvestigacion = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/redesInvestigacion/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteRedesInvestigacion= async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/redesInvestigacion/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Redes tematicas 

export const createRedesTematicas = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/redesTematicas/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getRedesTematicas = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/redesTematicas/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteRedesTematicas= async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/redesTematicas/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Proyectos de investigacion  

export const createProyectosInvestigacion = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/proyectosInvestigacion/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getProyectosInvestigacion = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/proyectosInvestigacion/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteProyectosInvestigacion= async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/proyectosInvestigacion/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}