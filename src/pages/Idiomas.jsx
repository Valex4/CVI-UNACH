import React from 'react'
import Dash from '../components/templates/Dash';
import FormIdiomas from '../components/organism/FormIdiomas';

function Idiomas() {
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormIdiomas/>
            </div>
        </main>
    </>
  )
}

export default Idiomas