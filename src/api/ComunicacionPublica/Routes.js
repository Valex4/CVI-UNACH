import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

//Participacion en congresos
export const createParticipacionCongresos = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/participacionCongreso/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getParticipacionCongresos = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/participacionCongreso/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteParticipacionCongresos = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/participacionCongreso/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Publicacion de articulos

export const createPublicacionArticulos = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/difusionPublicacionArticulos/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getPublicacionArticulos = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/difusionPublicacionArticulos/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deletePublicacionArticulos = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/difusionPublicacionArticulos/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Publicacion de libros

export const createPublicacionLibros = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/difusionPublicacionLibros/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getPublicacionLibros = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/difusionPublicacionLibros/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deletePublicacionLibros = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/difusionPublicacionLibros/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Capitulos publicados

export const createCapitulosPublicados = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/difusionCapitulosPublicados/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getCapitulosPublicados = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/difusionCapitulosPublicados/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteCapitulosPublicados = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/difusionCapitulosPublicados/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//Divulgacion 

export const createDivulgacion = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/divulgacion/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getDivulgacion = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/divulgacion/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteDivulgacion = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/divulgacion/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}