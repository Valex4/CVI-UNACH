import axios from "axios";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;


export const createCourses = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/cursosImpartidos/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getCourses = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/cursosImpartidos", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const createDiplomat = async(valores) => {
  const token = Cookies.get('token');
  return await axios.post( "http://127.0.0.1:8000/api/diplomadosImpartidos/", valores, {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },});
}

export const getDiplomat = async(valores) => {
  const token = Cookies.get('token');
  return await axios.get( "http://127.0.0.1:8000/api/diplomadosImpartidos", {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },});
}