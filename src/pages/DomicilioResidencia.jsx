import React from 'react'
import Dash from '../components/templates/Dash'
import FormRecidencia from '../components/organism/FormRecidencia'

export default function DomicilioResidencia() {
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormRecidencia/>
            </div>
        </main>
    </>
  )
}
