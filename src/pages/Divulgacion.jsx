import React from 'react'
import Dash from '../components/templates/Dash'
import FormDivulgacion from '../components/organism/ComunicacionPublica/Divulgacion/FormDivulgacion'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { getDivulgacion, deleteDivulgacion } from '../api/ComunicacionPublica/Routes'
import Title from '../components/atoms/Title'

function Divulgacion() {
  const [Divulgaciones, setDivulgaciones] = useState([])
  const [Change, setChange] = useState(false);

  useEffect(() => {
    const getData = async() =>{
      const response = await getDivulgacion();
      setDivulgaciones(response.data);
    }
    getData();
  }, [Change])
  
  const handleDeleteDivulgacion = async (event) => {
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
        const response = await deleteDivulgacion(id);
        setChange((prev) => !prev);
      }
    });
  }

  const renderTableDivulgacion = () => {
    return (
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 p-30">
            <tr className=" rounded-lg">
              <th className="p-3"><Title level="h3" text="Divulgaciones" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Título del trabajo</th>
              <th className="py-2 px-4 border-b text-left">Tipo de participación</th>
              <th className="py-2 px-4 border-b text-left">Tipo de evento</th>
              <th className="py-2 px-4 border-b text-left">Tipo de divulgación y difusión</th>
              <th className="py-2 px-4 border-b text-left">Fecha</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              Divulgaciones.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td className="py-2 px-4 border-b">{item.titulo_trabajo}</td>
                  <td className="py-2 px-4 border-b">{item.tipo_participacion}</td>
                  <td className="py-2 px-4 border-b">{item.tipo_evento}</td>
                  <td className="py-2 px-4 border-b">{item.tipo_divulgacion}</td>
                  <td className="py-2 px-4 border-b">{item.fecha}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                      <span className="material-icons-sharp">
                        edit
                      </span>
                    </button>
                    <button onClick={handleDeleteDivulgacion} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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




  return (
    <>
      <Dash/>
      <main className='dashboard'>
            <div className='mt-12 h-auto'>
            <FormDivulgacion/>
            {renderTableDivulgacion()}
            </div>
      </main>   
    </>
  )
}

export default Divulgacion