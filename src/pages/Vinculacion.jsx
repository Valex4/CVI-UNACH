import React from 'react'
import FormVinculacion from '../components/organism/Vinculacion/FormVinculacion'
import FormRedesInvestigacion from '../components/organism/Vinculacion/FormRedesInvestigacion'
import FormRedesTematicas from '../components/organism/Vinculacion/FormRedesTematicas'
import FormGruposInvestigacion from '../components/organism/Vinculacion/FormGruposInvestigacion'
import Dash from '../components/templates/Dash'
import Title from '../components/atoms/Title'
import { useState } from 'react'

function Vinculacion() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const renderTable = () =>{
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                        <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Proyectos" /> </th>
                        </tr>
                        </thead>
                        <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Nombre del proyecto</th>
                            <th className="py-2 px-4 border-b text-left">Tipo de proyecto</th>
                            <th className="py-2 px-4 border-b text-left">Inicio</th>
                            <th className="py-2 px-4 border-b text-left">Fin</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Animatronicos reales</td>
                            <td className="py-2 px-4 border-b">UPCHIAPAS</td>
                            <td className="py-2 px-4 border-b">10/11/2022</td>
                            <td className="py-2 px-4 border-b">11/11/2022</td>
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
                            <td className="py-2 px-4 border-b">Restos espaciales</td>
                            <td className="py-2 px-4 border-b">UNACH</td>
                            <td className="py-2 px-4 border-b">20/05/2012</td>
                            <td className="py-2 px-4 border-b">21/05/2012</td>
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
          return(<>
            <FormVinculacion/>
            {renderTable()}
        </>   
        );
        case 'op2':
            return(
            <>
                <FormRedesTematicas/>
          
            </>      
            );
        case 'op3':
          return(
            <>
                <FormRedesInvestigacion/>
                
            </>
          );
        case 'op4':
            return(
                <>
                <FormGruposInvestigacion/>
                </>
            )
        default:
          setOpcionSeleccionada('op1')
      } 
}

  return (
    <>
        <Dash/>
        <main className="dashboard">
                <div className="mt-12 h-auto">
                     <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
                        <header className='mb-5 mt-2'>
                            <nav className="mt-30">
                                <ul className="flex flex-row gap-5 item-center justify-center top-">
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Proyectos de investigación</li>
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Redes temáticas CONACYT</li>   
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Redes de investigación</li>    
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Grupos de investigación</li>         
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

export default Vinculacion