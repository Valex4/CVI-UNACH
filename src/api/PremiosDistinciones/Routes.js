import axios from "axios";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;


export const createDistinctions = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/distincionesNoConacyt/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}