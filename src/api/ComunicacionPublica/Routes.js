import axios from "axios";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;


export const createDifusion = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/participacionCongreso/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getDifusion = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/cursosImpartidos", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}