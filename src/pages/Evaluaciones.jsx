import React from 'react'
import { useState } from 'react'
import Dash from '../components/templates/Dash'
import FormEvaluacionNoConacyt from '../components/organism/Evaluaciones/FormEvaluacionNoConacyt'
import FormEvalucacionConcacyt from '../components/organism/Evaluaciones/FormEvalucacionConcacyt'
import Title from '../components/atoms/Title'

function Evaluaciones() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const rendetTableConacyt = ()=>{
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Evaluaciones CONACYT" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre del fondo o programa</th>
              <th className="py-2 px-4 border-b text-left">Descripción</th>
              <th className="py-2 px-4 border-b text-left">Fecha de aceptación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Candidato</td>
              <td className="py-2 px-4 border-b">descripcion</td>
              <td className="py-2 px-4 border-b">11/12/23</td>
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

  const rendetTableNoConacyt = ()=>{
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
          <thead className=" w-full h-10 ">
            <tr className="rounded-lg">
              <th className="p-2"><Title level="h3" text="Evaluaciones No CONACYT" /> </th>
            </tr>
          </thead>
          <thead>
            <tr className=" bg-[#667DA3] text-white">
              <th className="py-2 px-4 border-b text-left">Nombre del producto</th>
              <th className="py-2 px-4 border-b text-left">Institución</th>
              <th className="py-2 px-4 border-b text-left">Cargo desempeñado</th>
              <th className="py-2 px-4 border-b text-left">Tipo de evaluación</th>
              <th className="py-2 px-4 border-b text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Candidato</td>
              <td className="py-2 px-4 border-b">descripcion</td>
              <td className="py-2 px-4 border-b">11/12/23</td>
              <td className="py-2 px-4 border-b">descripcion</td>
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
        return (<>
          <FormEvalucacionConcacyt />
          {rendetTableConacyt()}
        </>
        );
      case 'op2':
        return (
          <>
            <FormEvaluacionNoConacyt />
            {rendetTableNoConacyt()}
          </>
        );
      default:
        setOpcionSeleccionada('op1')
    }
  }
  return (
    <>
      <Dash />
      <main className="dashboard">
        <div className="mt-12 h-auto">
          <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
            <header className='mb-5 mt-2'>
              <nav className="mt-30">
                <ul className="flex flex-row gap-5 item-center justify-center top-">
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Evaluaciones CONACYT</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Evaluaciones no CONACYT</li>
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

export default Evaluaciones