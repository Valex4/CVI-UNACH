import Dash from "../components/templates/Dash";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FormDesarrolloSoftware from '../components/organism/ProduccionCTI/TecnologicaInnovacion/FormDesarrolloSoftware'
import FormDesarrollosT from "../components/organism/ProduccionCTI/TecnologicaInnovacion/FormDesarrollosT";
import FormInnovacion from "../components/organism/ProduccionCTI/TecnologicaInnovacion/FormInnovacion"
import FormPatentes from "../components/organism/ProduccionCTI/TecnologicaInnovacion/FormPatentes"
import Title from "../components/atoms/Title";


function TecnologicaInnovacion() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const renderTableInnovacion = ( ) => {
        return(
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                              <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                              <thead className=" w-full h-10 ">
                              <tr className="rounded-lg">
                                  <th className="p-2"><Title level="h3" text="Innovaciones" /> </th>
                              </tr>
                              </thead>
                              <thead>
                              <tr className=" bg-[#667DA3] text-white">
                                  <th className="py-2 px-4 border-b text-left">Tipo innovacion</th>
                                  <th className="py-2 px-4 border-b text-left">Potencial de cobertura</th>
                                  <th className="py-2 px-4 border-b text-left">Mecanismo de propiedad intelectual</th>
                                  <th className="py-2 px-4 border-b text-left">Acciones</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td className="py-2 px-4 border-b">Animatronicos reales</td>
                                  <td className="py-2 px-4 border-b">UPCHIAPAS</td>
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

    const renderTableSoftware = () => {
        return(
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                              <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                              <thead className=" w-full h-10 ">
                              <tr className="rounded-lg">
                                  <th className="p-2"><Title level="h3" text="Desarrollo Software" /> </th>
                              </tr>
                              </thead>
                              <thead>
                              <tr className=" bg-[#667DA3] text-white">
                                  <th className="py-2 px-4 border-b text-left">Título</th>
                                  <th className="py-2 px-4 border-b text-left">Tipo de desarrollo</th>
                                  <th className="py-2 px-4 border-b text-left">Derecho de autor</th>
                                  <th className="py-2 px-4 border-b text-left">País</th>
                                  <th className="py-2 px-4 border-b text-left">Acciones</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td className="py-2 px-4 border-b">Animatronicos reales</td>
                                  <td className="py-2 px-4 border-b">UPCHIAPAS</td>
                                  <td className="py-2 px-4 border-b">11/11/2022</td>
                                  <td className="py-2 px-4 border-b">México</td>
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
                                  <td className="py-2 px-4 border-b">21/05/2012</td>
                                  <td className="py-2 px-4 border-b">México</td>
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

    const renderTableDT = () => {
        return(
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                              <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                              <thead className=" w-full h-10 ">
                              <tr className="rounded-lg">
                                  <th className="p-2"><Title level="h3" text="Desarrollo Técnologico" /> </th>
                              </tr>
                              </thead>
                              <thead>
                              <tr className=" bg-[#667DA3] text-white">
                                  <th className="py-2 px-4 border-b text-left">Nombre del desarrollo</th>
                                  <th className="py-2 px-4 border-b text-left">Tipo de desarrollo</th>
                                  <th className="py-2 px-4 border-b text-left">Documentos de respaldo</th>
                                  <th className="py-2 px-4 border-b text-left">Apoyo CONACYT</th>
                                  <th className="py-2 px-4 border-b text-left">Acciones</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td className="py-2 px-4 border-b">Animatronicos reales</td>
                                  <td className="py-2 px-4 border-b">UPCHIAPAS</td>
                                  <td className="py-2 px-4 border-b">11/11/2022</td>
                                  <td className="py-2 px-4 border-b">No</td>
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
                                  <td className="py-2 px-4 border-b">21/05/2012</td>
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
              return(<>
                <FormDesarrollosT/>
                {renderTableDT()}
            </>   
            );
            case 'op2':
                return(
                <>
                    <FormInnovacion/>
                    {renderTableInnovacion()}
                </>      
                );
            case 'op3':
              return(
                <>
                    <FormDesarrolloSoftware/>
                    {renderTableSoftware()}
                </>
              );
            case 'op4':
                return(
                    <>
                    <FormPatentes/>
                    </>
                )
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
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Desarrollos Tecnológicos</li>
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Innovación</li>   
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Desarrollo de Software</li>    
                                <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Patentes</li>         
                                </ul>
                            </nav>
                        </header>
                    </div>
                    {renderFormulario()}
                </div>
            </main>
        </>
      );
}

export default TecnologicaInnovacion;