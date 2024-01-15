import React from 'react';
import Dash from '../components/templates/Dash';
import FormDifusion from '../components/organism/ComunicacionPublica/Difusion/FormDifusion';
import FormCapitulosP from '../components/organism/ComunicacionPublica/Difusion/FormCapitulosP';
import FormPArticulos from '../components/organism/ComunicacionPublica/Difusion/FormPArticulos';
import FormPLibros from '../components/organism/ComunicacionPublica/Difusion/FormPLibros';
import { useState, useEffect } from 'react';
import Title from '../components/atoms/Title';
import { getCapitulosPublicados, getPublicacionLibros, getParticipacionCongresos, getPublicacionArticulos, deleteCapitulosPublicados, deletePublicacionLibros, deleteParticipacionCongresos, deletePublicacionArticulos } from '../api/ComunicacionPublica/Routes';
import Swal from 'sweetalert2';

function Difusion() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [Change, setChange] = useState(false);
  const [CapitulosPublicados, setCapitulosPublicados] = useState([]);
  const [PublicacionLibros, setPublicacionLibros] = useState([]);
  const [ParticipacionCongresos, setParticipacionCongresos] = useState([]);
  const [PublicacionArticulos, setPublicacionArticulos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const responseCapitulosP = await getCapitulosPublicados();
      const responsePublicacionLibros = await getPublicacionLibros();
      const responsePublicacionArticulos = await getPublicacionArticulos();
      const responseParticipacionCongresos = await getParticipacionCongresos();
      setPublicacionLibros(responsePublicacionLibros.data);
      setPublicacionArticulos(responsePublicacionArticulos.data);
      setParticipacionCongresos(responseParticipacionCongresos.data);
      setCapitulosPublicados(responseCapitulosP.data);
    }
    getData();
  }, [Change])


  const handleDeleteCapitulosPublicados = async (event) => {
    const button = event.target;
    const id = button.closest('tr').id;
    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El registro se ha eliminado correctamente",
          icon: "success"
        });
        const response = await deleteCapitulosPublicados(id);
        setChange((prev) => !prev);
      }
    });
  }

  const handleDeleteParticipacionCongresos = async (event) => {
    const button = event.target;
    const id = button.closest('tr').id;
    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El registro se ha eliminado correctamente",
          icon: "success"
        });
        const response = await deleteParticipacionCongresos(id);
        setChange((prev) => !prev);
      }
    });
  }

  const handleDeletePublicacionLibros = async (event) => {
    const button = event.target;
    const id = button.closest('tr').id;
    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El registro se ha eliminado correctamente",
          icon: "success"
        });
        const response = await deletePublicacionLibros(id);
        setChange((prev) => !prev);
      }
    });
  }

  const handleDeletePublicacionArticulos = async (event) => {
    const button = event.target;
    const id = button.closest('tr').id;
    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El registro se ha eliminado correctamente",
          icon: "success"
        });
        const response = await deletePublicacionArticulos(id);
        setChange((prev) => !prev);
      }
    });
  }

  const renderTableCP = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Capítulos publicados" /> </th>
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
            {
              CapitulosPublicados.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.ISBN}</td>
                  <td className="py-2 px-4 border-b">{item.titulo_libro}</td>
                  <td className="py-2 px-4 border-b">{item.titulo_capitulo}</td>
                  <td className="py-2 px-4 border-b">{item.numero_capitulo}</td>
                  <td className="py-2 px-4 border-b">{item.year_publicacion}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteCapitulosPublicados} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  const renderTableParticipacionC = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Participaciones en congresos" /></th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre del congreso</th>
              <th className="py-2 px-4 border-b text-left">Título del trabajo</th>
              <th className="py-2 px-4 border-b text-left">Tipo de participación</th>
              <th className="py-2 px-4 border-b text-left">País</th>
              <th className="py-2 px-4 border-b text-left">Fecha</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              ParticipacionCongresos.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.nombre_congreso}</td>
                  <td className="py-2 px-4 border-b">{item.titulo_trabajo}</td>
                  <td className="py-2 px-4 border-b">{item.participacion_congreso}</td>
                  <td className="py-2 px-4 border-b">{item.pais}</td>
                  <td className="py-2 px-4 border-b">{item.fecha}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteParticipacionCongresos} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  const renderTablePublicacionLibros = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Publicación de libros" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">ISBN</th>
              <th className="py-2 px-4 border-b text-left">Título del libro</th>
              <th className="py-2 px-4 border-b text-left">País de publicacion</th>
              <th className="py-2 px-4 border-b text-left">Idioma</th>
              <th className="py-2 px-4 border-b text-left">Año de la publicación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              PublicacionLibros.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.ISBN}</td>
                  <td className="py-2 px-4 border-b">{item.titulo_libro}</td>
                  <td className="py-2 px-4 border-b">{item.pais}</td>
                  <td className="py-2 px-4 border-b">{item.idioma}</td>
                  <td className="py-2 px-4 border-b">{item.year_publicacion}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeletePublicacionLibros} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  const renderTablePublicacionArticulos = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Publicación de artículos" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">DOI</th>
              <th className="py-2 px-4 border-b text-left">Nombre de la revista</th>
              <th className="py-2 px-4 border-b text-left">Título del artículo</th>
              <th className="py-2 px-4 border-b text-left">Páginas de</th>
              <th className="py-2 px-4 border-b text-left">Páginas a</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              PublicacionArticulos.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.DOI}</td>
                  <td className="py-2 px-4 border-b">{item.nombre_revista}</td>
                  <td className="py-2 px-4 border-b">{item.titulo_articulo}</td>
                  <td className="py-2 px-4 border-b">{item.de_pagina}</td>
                  <td className="py-2 px-4 border-b">{item.a_pagina}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeletePublicacionArticulos} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case 'op1':
        return (
          <>
            <FormDifusion />
            {renderTableParticipacionC()}
          </>
        );
      case 'op2':
        return (
          <>
          <FormPArticulos />
          {renderTablePublicacionArticulos()}
          </>
        
        );
      case 'op3':
        return (
          <>  
          <FormPLibros />
          {renderTablePublicacionLibros()}
          </>
      
        );
      case 'op4':
        return (<>
          <FormCapitulosP />
          {renderTableCP()}
        </>);

      default:
        setOpcionSeleccionada('op1')
    }
  }
  return (
    <>
      <Dash />
      <main className='dashboard'>
        <div className='mt-12 h-auto'>
          <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
            <header className='mb-5 mt-2'>
              <nav className="mt-30">
                <ul className="flex flex-row gap-5 item-center justify-center top-">
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Participantes en congresos</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Publicación de artículos</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Publicación de libros</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Capítulos publicados</li>
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

export default Difusion