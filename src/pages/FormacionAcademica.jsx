import Dash from "../components/templates/Dash";
import { useState } from "react";
import FormGradosAcademicos from "../components/organism/FormacionAcademica/FormGradosAcademicos"
import FormOtros from "../components/organism/FormacionAcademica/FormOtros"
import FormCertificacionesM from "../components/organism/FormacionAcademica/FormCertificacionesM"

function FormacionAcademica() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const renderFormulario = () => {
        switch (opcionSeleccionada) {
            case 'op1':
              return(<FormGradosAcademicos/>);
            case 'op2':
              return(<FormCertificacionesM/>);
            case 'op3':
              return(<FormOtros/>);
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