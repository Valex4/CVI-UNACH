import React from 'react'
import Input from '../atoms/input'

export default function WrapperTable({mensaje, type, name, dato, onchange, className}) {
  return (
    <>
        <div className=' grid grid-cols-2 gap-5'>
            <label className={`flex items-center justify-start mt-2 text-white font-bold text-xs p-2 ${className} h-[35px]  rounded`}>{mensaje}</label>
            <Input type={type} name={name} dato={dato} onchange={onchange}/>
        </div>
    </>
  )
}
