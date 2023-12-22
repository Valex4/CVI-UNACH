import Dash from "../components/templates/Dash";
import { useState } from "react";
import FormGradosAcademicos from "../components/organism/FormacionAcademica/FormGradosAcademicos"
import FormOtros from "../components/organism/FormacionAcademica/FormOtros"
import FormCertificacionesM from "../components/organism/FormacionAcademica/FormCertificacionesM"
import Title from "../components/atoms/Title";

function FormacionAcademica() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const renderTableGA = ( ) => {
      return(
          <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                            <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                            <thead className=" w-full h-10 ">
                            <tr className="rounded-lg">
                                <th className="p-2"><Title level="h3" text="Grados académicos" /> </th>
                            </tr>
                            </thead>
                            <thead>
                            <tr className=" bg-[#667DA3] text-white">
                                <th className="py-2 px-4 border-b text-left">Título</th>
                                <th className="py-2 px-4 border-b text-left">Nivel de escolaridad</th>
                                <th className="py-2 px-4 border-b text-left">Estatus</th>
                                <th className="py-2 px-4 border-b text-left">País</th>
                                <th className="py-2 px-4 border-b text-left">Fecha de obtencion de grado</th>
                                <th className="py-2 px-4 border-b text-left">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">Animatronicos reales</td>
                                <td className="py-2 px-4 border-b">UPCHIAPAS</td>
                                <td className="py-2 px-4 border-b">Indefinido</td>
                                <td className="py-2 px-4 border-b">Mexico</td>
                                <td className="py-2 px-4 border-b">23/12/2019</td>
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
                                <td className="py-2 px-4 border-b">Indefinido</td>
                                <td className="py-2 px-4 border-b">Mexico</td>
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

  const renderTableOtros = ()=>{
    return(
      <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
      <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
      <thead className="w-full h-10 ">
      <tr className="rounded-lg">
          <th className="p-2"><Title level="h3" text="Otros" /> </th>
      </tr>
      </thead>
      <thead>
      <tr className=" bg-[#667DA3] text-white">
          <th className="py-2 px-4 border-b text-left">Formación continua</th>
          <th className="py-2 px-4 border-b text-left">Nombre</th>
          <th className="py-2 px-4 border-b text-left">Año</th>
          <th className="py-2 px-4 border-b text-left">Horas totales</th>
          <th className="py-2 px-4 border-b text-left">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td className="py-2 px-4 border-b">Animatronicos reales</td>
          <td className="py-2 px-4 border-b">UPCHIAPAS</td>
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

    const renderFormulario = () => {
        switch (opcionSeleccionada) {
            case 'op1':
              return(
                <>
                <FormGradosAcademicos/>
                {renderTableGA()}
                </>
              );
            case 'op2':
              return(
                <>
                 <FormCertificacionesM/>
                 
                </>
              );
            case 'op3':
              return(
              <>
              <FormOtros/>
              {renderTableOtros()}
              </>
              );
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
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Grados académicos</li>
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Certificaciones médicas</li>    
                            <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Otro</li>          
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

export default FormacionAcademica;