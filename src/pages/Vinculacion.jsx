import React from 'react'
import FormVinculacion from '../components/organism/FormVinculacion'
import Dash from '../components/templates/Dash'
import Title from '../components/atoms/Title'

function Vinculacion() {
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
  return (
    <>
        <Dash/>
        <main className="dashboard">
                <div className="mt-20 pl-8 pr-8 ">
                      <FormVinculacion/>
                      {renderTable()}
                </div>    
        </main> 
    </>
  )
}

export default Vinculacion