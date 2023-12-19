import React from 'react'
import Dash from '../components/templates/Dash'
import { useState } from 'react'
import Title from '../components/atoms/Title'

import FormEstanciasInvestigacion from "../components/organism/TrayectoriaProfesional/FormEstanciasInvestigacion"
import FormExperienciaLaboral from '../components/organism/TrayectoriaProfesional/FormExperienciaLaboral'

function TrayectoriaProfesional() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const renderTableExperiencia = ()=>{
        return(
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                        <thead className=" w-full h-10 p-30">
                        <tr className=" rounded-lg">
                            <th className="p-3"><Title level="h3" text="Experiencia Laboral" /> </th>
                        </tr>
                        </thead>
                        <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Puesto desempeño</th>
                            <th className="py-2 px-4 border-b text-left">Institución</th>
                            <th className="py-2 px-4 border-b text-left">Fecha inicio</th>
                            <th className="py-2 px-4 border-b text-left">Fecha fin</th>
                            <th className="py-2 px-4 border-b text-left">Empleo actual</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">1</td>
                            <td className="py-2 px-4 border-b">John Doe</td>
                            <td className="py-2 px-4 border-b">john@example.com</td>
                            <td className="py-2 px-4 border-b">john@example.com</td>
                            <td className="py-2 px-4 border-b">si</td>
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
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">1</td>
                            <td className="py-2 px-4 border-b">John Doe</td>
                            <td className="py-2 px-4 border-b">john@example.com</td>
                            <td className="py-2 px-4 border-b">john@example.com</td>
                            <td className="py-2 px-4 border-b">No</td>
                            <td className="py-2 px-4 border-b">
                            <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                            <span className="material-icons-sharp">
                                edit
                                </span>
                            </button>
                            <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2  hover:bg-red-600  ">
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
              return(
                <> 
                <FormExperienciaLaboral/>
                {renderTableExperiencia()}
                </>
             
              );
            case 'op2':
              return(<FormEstanciasInvestigacion/>);
            default:
              setOpcionSeleccionada('op1')
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
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Experiencia laboral</li>
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Estancias de investigación, profesionales y pos-doctorales</li>         
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

export default TrayectoriaProfesional