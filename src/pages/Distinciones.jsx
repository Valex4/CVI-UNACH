import React from 'react'
import { useState, useEffect } from 'react';
import FormDistinciones from '../components/organism/PremiosDistinciones/FormDistinciones';
import FormDistincionesConacyt from '../components/organism/PremiosDistinciones/FormDistincionesConacyt';
import Dash from '../components/templates/Dash';
import Title from '../components/atoms/Title';
import { getDistincionesConacyt, getDistincionesNoConacyt, deleteDistincionConacyt, deleteDistincionNoConacyt } from '../api/PremiosDistinciones/Routes';
import Swal from 'sweetalert2';

function Distinciones() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [DistincionesConacyt, setDistincionesConacyt] = useState([]);
  const [DistincionesNoConacyt, setDistincionesNoConacyt] = useState([]);
  const [Change, setChange] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const responseDistincionesConacyt = await getDistincionesConacyt();
      const responseDistincionesNoConacyt = await getDistincionesNoConacyt();
      setDistincionesConacyt(responseDistincionesConacyt.data);
      setDistincionesNoConacyt(responseDistincionesNoConacyt.data);
    }
    getData();
  }, [Change])

  const handleDeleteDistinciones = async (event) => {
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
        const response = await deleteDistincionConacyt(id);
        setChange((prev) => !prev);
      }
    });
  }

  const handleDistincionesNoConacyt = async (event) => {
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
        const response = await deleteDistincionNoConacyt(id);
        setChange((prev) => !prev);
      }
    });
  }

  const renderTableDC = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Distinciones" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre de la distinción</th>
              <th className="py-2 px-4 border-b text-left">Año</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              DistincionesConacyt.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.nombre_distincion}</td>
                  <td className="py-2 px-4 border-b">{item.year}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteDistinciones} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

  const renderTableDNC = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Distinciones No CONACYT" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre de la distinción</th>
              <th className="py-2 px-4 border-b text-left">Institución que otorgó el premio</th>
              <th className="py-2 px-4 border-b text-left">País</th>
              <th className="py-2 px-4 border-b text-left">Fecha</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              DistincionesNoConacyt.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.nombre_distincion}</td>
                  <td className="py-2 px-4 border-b">{item.institucion}</td>
                  <td className="py-2 px-4 border-b">{item.pais}</td>
                  <td className="py-2 px-4 border-b">{item.fecha}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDistincionesNoConacyt} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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
            <FormDistincionesConacyt />
            {renderTableDC()}
          </>
        );
      case 'op2':
        return (
          <>
            <FormDistinciones />
            {renderTableDNC()}
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
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Distinciones CONACYT</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Distinciones no CONACYT</li>
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

export default Distinciones