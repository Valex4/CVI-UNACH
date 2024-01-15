import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;



export const getEvaluacionesConacyt = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/evaluacionesConacyt/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createEvaluacionConacyt = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/evaluacionesConacyt/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteEvaluacionConacyt = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/evaluacionesConacyt/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

//NoConacyt

export const getEvaluacionesNoConacyt = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/evaluacionesNoConacyt/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createEvaluacionNoConacyt = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/evaluacionesNoConacyt/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteEvaluacionNoConacyt = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/evaluacionesNoConacyt/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}