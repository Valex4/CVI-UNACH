import React from 'react'
import Dash from '../components/templates/Dash'
import FormTesis from "../components/organism/FormacionPersonas/FormTesis"
import Title from '../components/atoms/Title'
function Tesis() {

  const renderTableTesis = () =>{
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
      <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
      <thead className="w-full h-10 ">
      <tr className="rounded-lg">
          <th className="p-2"><Title level="h3" text="Tesis dirigidas" /> </th>
      </tr>
      </thead>
      <thead>
      <tr className=" bg-[#667DA3] text-white">
          <th className="py-2 px-4 border-b text-left">Institución</th>
          <th className="py-2 px-4 border-b text-left">Título de la tesis</th>
          <th className="py-2 px-4 border-b text-left">Autor</th>
          <th className="py-2 px-4 border-b text-left">Estado</th>
          <th className="py-2 px-4 border-b text-left">Tipo tesis</th>
          <th className="py-2 px-4 border-b text-left">Fecha de obtención</th>
          <th className="py-2 px-4 border-b text-left">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td className="py-2 px-4 border-b">Animatronicos reales</td>
          <td className="py-2 px-4 border-b">UPCHIAPAS</td>
          <td className="py-2 px-4 border-b">Indefinido</td>
          <td className="py-2 px-4 border-b">Indefinido</td>
          <td className="py-2 px-4 border-b">Indefinido</td>
          <td className="py-2 px-4 border-b">Mexico</td>
          <td className="py-2 px-4 border-b">
          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
          <span className="material-icons-sharp">
              edit
              </span>
          </button>
          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
          <span className="material-symbols-outlined">
          delete
          </span>
          </button>
          </td>
      </tr>
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
                <FormTesis/>
                {renderTableTesis()}
            </div>
        </main>
    </>
  )
}

export default Tesis