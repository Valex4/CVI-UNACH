import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;


export const createGrados = async (valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/gradoAcademico/", valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getGrados = async () => {
    const token = Cookies.get('token');
    return await axios.get("http://localhost:8000/api/gradoAcademico/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}

export const deleteGrado = async (id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://localhost:8000/api/gradoAcademico/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}


//Otros

export const createOthers = async (valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/otraFormacion/", valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const getOthers = async () => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/otraFormacion/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}

export const deleteOther = async (id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://localhost:8000/api/otraFormacion/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}

//Certificaciones Medicas

export const createCertificate = async (valores) => {
    const token = Cookies.get('token');
    return await axios.post("http://127.0.0.1:8000/api/certificacionesMedicas/", valores, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}

export const getCertificates = async () => {
    const token = Cookies.get('token');
    return await axios.get("http://127.0.0.1:8000/api/certificacionesMedicas/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}

export const deleteCertificate = async (id) => {
    const token = Cookies.get('token');
    return await axios.delete(`http://127.0.0.1:8000/api/certificacionesMedicas/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
}