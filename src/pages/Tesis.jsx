import React from 'react'
import Dash from '../components/templates/Dash'
import FormTesis from "../components/organism/FormacionPersonas/FormTesis"
function Tesis() {
  return (
    <>
    <Dash/>
        <main className='dashboard'>
            <div className='mt-12 h-auto'>
                <FormTesis/>
               {/*  {renderTable()} */}
            </div>
        </main>
    </>
  )
}

export default Tesis