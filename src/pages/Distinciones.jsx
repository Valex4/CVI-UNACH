import React from 'react'
import { useState } from 'react';
import FormDistinciones from '../components/organism/PremiosDistinciones/FormDistinciones';
import FormDistincionesConacyt from '../components/organism/PremiosDistinciones/FormDistincionesConacyt';
import Dash from '../components/templates/Dash';
import Title from '../components/atoms/Title';

function Distinciones() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

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
            <tr>
              <td className="py-2 px-4 border-b">Candidato</td>
              <td className="py-2 px-4 border-b">2023</td>
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