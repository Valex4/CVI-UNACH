import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;


export const createLanguage = async(valores) =>{
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/idiomas/", valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getLanguage = async() =>{
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/idiomas/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteLanguage = async(id) =>{
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/idiomas/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createIndigenousLanguage = async(valores) =>{
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/lenguasIndigenas/", valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getIndigenousLanguage = async() =>{
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/lenguasIndigenas/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteIndigenousLanguage = async(id) =>{
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/lenguasIndigenas/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}
