import React from 'react';
import Dash from '../components/templates/Dash';
import FormDifusion from '../components/organism/FormDifusion';

function Difusion() {
  return (
    <>
        <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormDifusion/>
            </div>
        </main>
    </>
  )
}

export default Difusion