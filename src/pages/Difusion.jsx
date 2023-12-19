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
          return(<FormCapitulosP/>);
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