import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;


export const getExperienciaLaboral = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/experienciaLaboral/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createExperienciaLaboral = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/experienciaLaboral/", valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteExperienciaLaboral = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/experienciaLaboral/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}


/// Estancias de investigación

export const getEstanciasInvestigacion = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/estanciasInvestigacion/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createEstanciaInvestigacion = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/estanciasInvestigacion/", valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteEstanciaInvestigacion = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/estanciasInvestigacion/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}


//Medio

export const getMediosContacto = async() => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/medioContacto/",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const createMedioContacto = async(valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/medioContacto/", valores,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const deleteMedioContacto = async(id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/medioContacto/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}
