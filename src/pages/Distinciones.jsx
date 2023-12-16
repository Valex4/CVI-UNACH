import React from 'react'
import FormDistinciones from '../components/organism/FormDistinciones'
import Dash from '../components/templates/Dash';

function Distinciones() {
  return (
    <>
    <Dash/>
    <main className='dashboard'>
        <div className='mt-12 h-auto'>
            <FormDistinciones/>
        </div>
    </main>
</>
  )
}

export default Distinciones