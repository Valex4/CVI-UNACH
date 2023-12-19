import React from 'react'
import { useState } from 'react'
import Dash from '../components/templates/Dash'
import FormEvaluacionNoConacyt from '../components/organism/Evaluaciones/FormEvaluacionNoConacyt'
import FormEvalucacionConcacyt from '../components/organism/Evaluaciones/FormEvalucacionConcacyt'

function Evaluaciones() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case 'op1':
        return (<>
          <FormEvalucacionConcacyt />

        </>
        );
      case 'op2':
        return (
          <>
            <FormEvaluacionNoConacyt />

          </>
        );
      default:
        setOpcionSeleccionada('op1')
    }
  }
  return (
    <>
      <Dash />
      <main className="dashboard">
        <div className="mt-12 h-auto">
          <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
            <header className='mb-5 mt-2'>
              <nav className="mt-30">
                <ul className="flex flex-row gap-5 item-center justify-center top-">
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Evaluaciones CONACYT</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Evaluaciones no CONACYT</li>
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

export default Evaluaciones