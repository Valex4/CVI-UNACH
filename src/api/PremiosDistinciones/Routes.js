import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;



export const getDistincionesConacyt = async() =>{
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/distincionesConacyt/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createDistincionConacyt = async(valores) =>{
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/distincionesConacyt/", valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteDistincionConacyt = async(id) =>{
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/distincionesConacyt/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

/// Distinciones no conacyt

export const getDistincionesNoConacyt = async() =>{
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/distincionesNoConacyt/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createDistincionNoConacyt = async(valores) =>{
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/distincionesNoConacyt/", valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteDistincionNoConacyt = async(id) =>{
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/distincionesNoConacyt/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}