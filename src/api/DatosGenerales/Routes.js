import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

export const loginUser = async(valores) => {
    return await axios.post( "http://127.0.0.1:8000/api/login", valores)
}

export const getUser = async() => {
    const token = Cookies.get('token');
    return await axios.get( "http://localhost:8000/api/user", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const updateUser = async(valores,id) => {
    const token = Cookies.get('token');
    return await axios.put( `http://127.0.0.1:8000/api/user/${id}`, valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          }
    })
}

export const creaeteUser = async(valores) => {
    return await axios.post( `http://127.0.0.1:8000/api/register`, valores)
}
//Domicilio residencia

export const createDomicilio = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/domicilioResidencia/",valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getDomicilio = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/domicilioResidencia/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const updateDomicilio = async(valores, id) => {
    const token = Cookies.get('token');
    return await axios.put(`http://127.0.0.1:8000/api/domicilioResidencia/${id}`,valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}