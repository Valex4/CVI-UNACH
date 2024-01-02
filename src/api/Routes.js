import axios from "axios";

axios.defaults.withCredentials = true;



export const loginUser = async(valores) => {
    return await axios.post( "http://127.0.0.1:8000/api/login", valores)
}

export const getUser = async(clave) => {
    return await axios.get( "http://localhost:8000/api/user", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${clave}`, 
      },});
}