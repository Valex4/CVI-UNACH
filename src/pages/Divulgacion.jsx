import React from 'react'
import Dash from '../components/templates/Dash'
import FormDivulgacion from '../components/organism/ComunicacionPublica/Divulgacion/FormDivulgacion'

function Divulgacion() {
  return (
    <>
      <Dash/>
      <main className='dashboard'>
            <div className='mt-12 h-auto'>
            <FormDivulgacion/>
            </div>
      </main>   
    </>
  )
}

export default Divulgacion