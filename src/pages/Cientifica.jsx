import React from 'react'
import Dash from '../components/templates/Dash'
import { format } from 'date-fns';
import FormReportesTecnicos from '../components/organism/ProduccionCTI/Cientifica/FormReportesTecnicos'
import FormDocumentosTrabajo from '../components/organism/ProduccionCTI/Cientifica/FormDocumentosTrabajo'
import FormCapitulosP from '../components/organism/ProduccionCTI/Cientifica/FormCapitulosP'
import FormPArticulos from '../components/organism/ProduccionCTI/Cientifica/FormPArticulos'
import FormPLibros from '../components/organism/ProduccionCTI/Cientifica/FormPLibros'
import FormResenas from '../components/organism/ProduccionCTI/Cientifica/FormResenas'
import FormMemorias from '../components/organism/ProduccionCTI/Cientifica/FormMemorias'
import { useState, useEffect } from 'react'
import {getDocumentsWork, getArticls, getReportsTech, getPublishingBooks, getPublishedChapters, getMemories, getReviews} from "../api/ProduccionCTI/Routes"
import Title from '../components/atoms/Title'

function Cientifica() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const [documents, setDocuments] = useState([]) //documentos
  const [articls, setArticls] = useState([]) //arituclos
  const [reports, setReports] = useState([]) //reportes
  const [books, setBooks] = useState([]) //publicacion libros
  const [capitulo, setCapitulo] = useState([]) //capitulos publicados
  const [memoria, setMemoria] = useState([]) //memorias
  const [review, setReview] = useState([]) //reseñas
  
  //Reportes tecnicos
  useEffect(() => {
    const getReportes = async () => {
      try {
        const response = await getReportsTech();
        console.log("*********Reportes tecnicos*************")
        console.table(response.data)
        setReports(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReportes();
  }, [])

  const handlerClickRT = async () =>{
    const response = await getReportsTech();
    setReports(response.data)

  }


  //documentos de trabajo
  useEffect(() => {
    const getDocumentos = async () => {
      try {
        const response = await getDocumentsWork();
        console.log("*********Publicacion de libros*************")
        // console.table(response.data)
        setDocuments(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getDocumentos();
  }, [])

  //Publicacion de articulos
  useEffect(() => {
    const getArticulos = async () => {
      try {
        const response = await getArticls();
        console.log("*********Publicacion de articulos*************")
        console.table(response.data)
        setArticls(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getArticulos();
  }, [])


  //publicacion libros
  useEffect(() => {
    const getPublicacion = async () => {
      try {
        const response = await getPublishingBooks();
        console.log("*********Publicacion de libros*************")
        console.table(response.data)
        setBooks(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPublicacion();
  }, [])

  //Capitulos publicados
  useEffect(() => {
    const getCapitulos = async () => {
      try {
        const response = await getPublishedChapters();
        console.log("**********Capitulos publicados************")
        console.table(response.data)
        setCapitulo(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCapitulos();
  }, [])

  //Memorias
  useEffect(() => {
    const getMemorias = async () => {
      try {
        const response = await getMemories();
        console.log("**********Memorias************")
        console.table(response.data)
        setMemoria(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMemorias();
  }, [])

  //Reseñas
  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await getReviews();
        console.log("**********Reseñas************")
        console.table(response.data)
        setReview(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReview();
  }, [])

  const renderTableRT = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Reportes Técnicos" /> </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Título</th>
              <th className="py-2 px-4 border-b text-left">Institución</th>
              <th className="py-2 px-4 border-b text-left">Fecha entrega</th>
              <th className="py-2 px-4 border-b text-left">Fecha publicación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.titulo}</td>
                <td className="py-2 px-4 border-b">{item.institucion}</td>
                <td className="py-2 px-4 border-b">{" "}
                  {format(
                    new Date(
                      item.fecha_entrega.split("T")[0].split("-")
                    ),
                    "dd - MM - yyyy"
                  )}</td>
                <td className="py-2 px-4 border-b">{" "}
                  {format(
                    new Date(
                      item.fecha_publicacion.split("T")[0].split("-")
                    ),
                    "dd - MM - yyyy"
                  )}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600" onClick={handlerClickRT}>
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    )
  }

  const renderTableArticulos = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3">
                <Title level="h3" text="Autor(es)" />{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre de la revista</th>
              <th className="py-2 px-4 border-b text-left">Título artículo</th>
              <th className="py-2 px-4 border-b text-left">Segundo apellido</th>
              <th className="py-2 px-4 border-b text-left">Número de la revista</th>
              <th className="py-2 px-4 border-b text-left">Volumen de la revista</th>
              <th className="py-2 px-4 border-b text-left">Año de la publicación</th>
            </tr>
          </thead>
          <tbody>
            {articls.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.nombre_revista}</td>
                <td className="py-2 px-4 border-b">{item.titulo_articulo}</td>
                <td className="py-2 px-4 border-b">{item.num_revista}</td>
                <td className="py-2 px-4 border-b">{item.vol_revista}</td>
                <td className="py-2 px-4 border-b">{item.year_publicacion}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const renderTableLibros = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3">
                <Title level="h3" text="Autor(es)" />{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Primer apellido</th>
              <th className="py-2 px-4 border-b text-left">Segundo apellido</th>
              <th className="py-2 px-4 border-b text-left">Título libro</th>
              <th className="py-2 px-4 border-b text-left">Origen</th>
              <th className="py-2 px-4 border-b text-left">OrcId</th>
              <th className="py-2 px-4 border-b text-left">Orden</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map = ((item) => (
              <tr className=" bg-[#667DA3] text-white">
                <td className="py-2 px-4 border-b">{item.titulo_libro}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Jonh</td>
              <td className="py-2 px-4 border-b">Doe</td>
              <td className="py-2 px-4 border-b">Díaz</td>
              <td className="py-2 px-4 border-b">Mexico</td>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">20</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                  <span className="material-icons-sharp">edit</span>
                </button>
                <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  const renderTableCapitulos = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3">
                <Title level="h3" text="Autor(es)" />{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">ISBN</th>
              <th className="py-2 px-4 border-b text-left">Título del libro</th>
              <th className="py-2 px-4 border-b text-left">Título de capítulo</th>
              <th className="py-2 px-4 border-b text-left">Número del capítulo</th>
              <th className="py-2 px-4 border-b text-left">Año de publicación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {capitulo.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.ISBN}</td>
                <td className="py-2 px-4 border-b">{item.titulo_libro}</td>
                <td className="py-2 px-4 border-b">{item.titulo_capitulo}</td>
                <td className="py-2 px-4 border-b">{item.numero_capitulo}</td>
                <td className="py-2 px-4 border-b">{item.year_publicacion}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const renderTableMemorias = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3">
                <Title level="h3" text="Autor(es)" />{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Título de la memoria</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Primer apellido</th>
              <th className="py-2 px-4 border-b text-left">Segundo apellido</th>
              <th className="py-2 px-4 border-b text-left">Titulo de la publicación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {memoria.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.titulo_memorias}</td>
                <td className="py-2 px-4 border-b">{item.nombre}</td>
                <td className="py-2 px-4 border-b">{item.primer_apellido}</td>
                <td className="py-2 px-4 border-b">{item.segundo_apellido}</td>
                <td className="py-2 px-4 border-b">{item.titulo_publicacion}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const renderTableDocumentosTrabajo = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Documentos de trabajo" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Título del documento del trabajo</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Primer apellido</th>
              <th className="py-2 px-4 border-b text-left">Segundo apellido</th>
              <th className="py-2 px-4 border-b text-left">Año de publicación</th>
              <th className="py-2 px-4 border-b text-left">País</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.titulo_documento_trabajo}</td>
                <td className="py-2 px-4 border-b">{item.nombre}</td>
                <td className="py-2 px-4 border-b">{item.primer_apellido}</td>
                <td className="py-2 px-4 border-b">{item.segundo_apellido}</td>
                <td className="py-2 px-4 border-b">{item.year_publicacion}</td>
                <td className="py-2 px-4 border-b">{item.pais}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const renderTableReviews = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3">
                <Title level="h3" text="Reseñas" />{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Título de la reseña</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Primer apellido</th>
              <th className="py-2 px-4 border-b text-left">Segundo apellido</th>
              <th className="py-2 px-4 border-b text-left">Titulo de la publicación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {review.map((item) => (
              <tr>
                <td className="py-2 px-4 border-b">{item.titulo}</td>
                <td className="py-2 px-4 border-b">{item.nombre}</td>
                <td className="py-2 px-4 border-b">{item.primer_apellido}</td>
                <td className="py-2 px-4 border-b">{item.segundo_apellido}</td>
                <td className="py-2 px-4 border-b">{item.titulo_publicacion}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">edit</span>
                  </button>
                  <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case 'op1':
        return (
          <>
            <FormReportesTecnicos />
            {renderTableRT()}
          </>
        );
      case 'op2':
        return (
          <>
            <FormDocumentosTrabajo />
            {renderTableDocumentosTrabajo()}
          </>
        );
      case 'op3':
        return (
          <>
            <FormPArticulos />
            {renderTableArticulos()}
          </>
        );
      case 'op4':
        return (
          <>
            <FormPLibros />
            {renderTableLibros()}
          </>
        );
      case 'op5':
        return (
          <>
            <FormCapitulosP />
            {renderTableCapitulos()}
          </>
        );
      case 'op6':
        return (
        <>
        <FormMemorias />
        {renderTableMemorias()}
        </>
        );
      case 'op7':
        return (
         <>
        <FormResenas />
        {renderTableReviews()}
         </>  
        );
      default:
        setOpcionSeleccionada('op1')
        return (<FormReportesTecnicos />);
    }
  }  
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
                    <header className='mb-5 mt-2'>
                        <nav className="mt-30">
                            <ul className="flex flex-row gap-5 item-center justify-center top-">
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Reportes Técnicos</li>
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Documentos de trabajo</li>   
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Publicación de articulos</li> 
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Publicacion de libros</li> 
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op5' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op5')}>Capítulos publicados</li> 
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op6' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op6')}>Memorias</li> 
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op7' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op7')}>Reseñas</li>          
                            </ul>
                        </nav>
                    </header>
                </div>
                {renderFormulario()}
            </div>
        </main>
    </>
  )
}

export default Cientifica