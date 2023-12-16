import React from 'react'
import Dash from '../components/templates/Dash'
import FormCursos from '../components/organism/FormCursos'
function Cursos() {
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormCursos/>
            </div>
        </main>
    </>
  )
}

export default Cursos