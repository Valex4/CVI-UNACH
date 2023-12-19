import React from 'react'
import { useState } from 'react';
import FormDistinciones from '../components/organism/PremiosDistinciones/FormDistinciones';
import FormDistincionesConacyt from '../components/organism/PremiosDistinciones/FormDistincionesConacyt';
import Dash from '../components/templates/Dash';

function Distinciones() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case 'op1':
        return (
          <>
            <FormDistincionesConacyt />
          </>
        );
      case 'op2':
        return (
          <>
            <FormDistinciones />

          </>
        );
      default:
        setOpcionSeleccionada('op1')
    }
  }

  return (
    <>
      <Dash />
      <main className='dashboard'>
        <div className='mt-12 h-auto'>
          <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
            <header className='mb-5 mt-2'>
              <nav className="mt-30">
                <ul className="flex flex-row gap-5 item-center justify-center top-">
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Distinciones CONACYT</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Distinciones no CONACYT</li>
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

export default Distinciones