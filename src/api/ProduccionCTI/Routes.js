import axios from "axios";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;

export const getDifusion = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/cursosImpartidos", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Publicacion de articulos
export const createArticls = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/publicacionCientificaArticulos/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getArticls = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/publicacionCientificaArticulos", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}



//Reportes tecnicos
export const createReportsTech = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/reporteTecnico/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getReportsTech = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/reporteTecnico", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Documentos de trabajo
export const createDocumentsWork = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/documentosTrabajo/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getDocumentsWork = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/documentosTrabajo", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Publicacion de libros
export const createPublishingBooks = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/publicacionCientificaLibros/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getPublishingBooks = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/publicacionCientificaLibros", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Capitulos publicados
export const createPublishedChapters = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/capitulosPublicadosCientifica/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getPublishedChapters = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/capitulosPublicadosCientifica", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Memorias
export const createMemories = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/memorias/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getMemories = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/memorias", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

//Reviews
export const createReviews = async(valores) => {
  const token = Cookies.get('token');
    return await axios.post( "http://127.0.0.1:8000/api/reviews/", valores, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}

export const getReviews = async() => {
  const token = Cookies.get('token');
    return await axios.get( "http://127.0.0.1:8000/api/reviews", {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },});
}