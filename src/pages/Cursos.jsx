import React from 'react'
import Dash from '../components/templates/Dash'
import FormCursos from '../components/organism/FormacionPersonas/FormCursos'


function Cursos() {
  const renderTable = () =>{
    
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                        <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                        <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Institución</th>
                            <th className="py-2 px-4 border-b text-left">Nombre del programa</th>
                            <th className="py-2 px-4 border-b text-left">Nombre del curso o asignatura</th>
                            <th className="py-2 px-4 border-b text-left">Tipo de curso</th>
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
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormCursos/>
                {renderTable()}
            </div>
        </main>
    </>
  )
}

export default Cursos