import Dash from "../components/templates/Dash";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FormDesarrolloSoftware from '../components/organism/FormDesarrolloSoftware'
import FormDesarrollosT from "../components/organism/FormDesarrollosT";
import FormInnovacion from "../components/organism/FormInnovacion"


function TecnologicaInnovacion() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const renderFormulario = () => {
        switch (opcionSeleccionada) {
            case 'op1':
              return(<FormDesarrollosT/>);
            case 'op2':
                return(<FormInnovacion/>);
            case 'op3':
              return(<FormDesarrolloSoftware/>);
            default:
              setOpcionSeleccionada('op1')
              return(<FormDesarrollosT/>);
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