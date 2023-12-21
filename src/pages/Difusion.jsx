import React from 'react';
import Dash from '../components/templates/Dash';
import FormDifusion from '../components/organism/ComunicacionPublica/Difusion/FormDifusion';
import FormCapitulosP from '../components/organism/ComunicacionPublica/Difusion/FormCapitulosP';
import FormPArticulos from '../components/organism/ComunicacionPublica/Difusion/FormPArticulos';
import FormPLibros from '../components/organism/ComunicacionPublica/Difusion/FormPLibros';
import { useState } from 'react';
import Title from '../components/atoms/Title';

function Difusion() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const renderTableCP = ()=>{
    return(
        <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                    <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 p-30">
                    <tr className=" rounded-lg">
                        <th className="p-3"><Title level="h3" text="Capítulos publicados" /> </th>
                    </tr>
                    </thead>
                    <thead>
                    <tr className=" bg-[#667DA3] text-white">
                        <th className="py-2 px-4 border-b text-left">ISBN</th>
                        <th className="py-2 px-4 border-b text-left">Título del libro</th>
                        <th className="py-2 px-4 border-b text-left">Título de capítulo</th>
                        <th className="py-2 px-4 border-b text-left">Número del capítulo</th>
                        <th className="py-2 px-4 border-b text-left">Año de publicación</th>
                        <th className="py-2 px-4 border-b text-left">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b"></td>
                        <td className="py-2 px-4 border-b"></td>
                        <td className="py-2 px-4 border-b"></td>
                        <td className="py-2 px-4 border-b"></td>
                        <td className="py-2 px-4 border-b"></td>
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
          return(
          <>
            <FormDifusion/>
          </>
          );
        case 'op2':
          return(<FormPArticulos/>);
        case 'op3':
          return(<FormPLibros/>);
        case 'op4':
          return(<>
            <FormCapitulosP/>
            {renderTableCP()}
          </>);
          
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
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Participantes en congresos</li>
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Publicación de artículos</li>   
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Publicación de libros</li> 
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Capítulos publicados</li>      
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

export default Difusion