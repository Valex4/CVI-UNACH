import React from 'react'
import { useState, useEffect } from 'react';
import Dash from '../components/templates/Dash';
import FormIdiomas from '../components/organism/LenguasIdiomas/FormIdiomas';
import FormLenguasIndi from '../components/organism/LenguasIdiomas/FormLenguasIndi';
import { getLanguage, deleteLanguage, getIndigenousLanguage, deleteIndigenousLanguage } from '../api/LenguasIdiomas/Routes';
import Title from '../components/atoms/Title';
import Swal from 'sweetalert2';

function Idiomas() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [Idiomas, setIdiomas] = useState([])
  const [Lenguajes, setLenguajes] = useState([])
  const [Change, setChange] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await getLanguage();
      const responseLenguajes = await getIndigenousLanguage();
      setIdiomas(response.data);
      setLenguajes(responseLenguajes.data);
      console.table(response.data);
    }
    getData()
  }, [Change])

  const handleDeleteIdiomas = async (event) => {
    const button = event.target;
    const tr = button.closest('tr');
    const trId = tr.id;
    console.log('ID del <tr>:', trId);
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
        const response = await deleteLanguage(trId);
        setChange((prev) => !prev);
      }
    });
  }

  const handleDeleteLenguas = async (event) => {
    const button = event.target;
    const tr = button.closest('tr');
    const trId = tr.id;
    console.log('ID del <tr>:', trId);

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
        const response = await deleteIndigenousLanguage(trId);
        setChange((prev) => !prev);
      }
    });
  }

  const renderTableIdiomas = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Idiomas" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Idioma</th>
              <th className="py-2 px-4 border-b text-left">Institución que otorgó certificado</th>
              <th className="py-2 px-4 border-b text-left">Grado de dominio</th>
              <th className="py-2 px-4 border-b text-left">¿Cuenta con certificación?</th>
              <th className="py-2 px-4 border-b text-left">Puntos</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              Idiomas.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.idioma}</td>
                  <td className="py-2 px-4 border-b">{item.institucion}</td>
                  <td className="py-2 px-4 border-b">{item.grado_dominio}</td>
                  <td className="py-2 px-4 border-b">{item.certificacion === 1 ? "Si" : "No"}</td>
                  <td className="py-2 px-4 border-b">{item.puntos}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteIdiomas} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderTableLenguas = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Lenguas indigenas" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Lenguas</th>
              <th className="py-2 px-4 border-b text-left">Grado de dominio</th>
              <th className="py-2 px-4 border-b text-left">¿Cuenta con certificación?</th>
              <th className="py-2 px-4 border-b text-left">Documento aprobatorio</th>
              <th className="py-2 px-4 border-b text-left">Puntos</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              Lenguajes.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.lengua}</td>
                  <td className="py-2 px-4 border-b">{item.grado_dominio}</td>
                  <td className="py-2 px-4 border-b">{item.certificacion === 1 ? "Si" : "No"}</td>
                  <td className="py-2 px-4 border-b">{item.documento_probatorio}</td>
                  <td className="py-2 px-4 border-b">{item.puntos}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteLenguas} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
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
            <FormIdiomas />
            {renderTableIdiomas()}
          </>
        );
      case 'op2':
        return (
          <>
            <FormLenguasIndi />
            {renderTableLenguas()}
          </>
        );
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
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Idiomas</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Lenguas indígenas</li>
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

export default Idiomas