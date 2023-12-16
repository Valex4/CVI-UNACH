import React from 'react';
import Dash from '../components/templates/Dash';
import FormDiplomados from '../components/organism/FormDiplomados';

function Diplomados() {
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormDiplomados/>
            </div>
        </main>
    </>
  )
}

export default Diplomados