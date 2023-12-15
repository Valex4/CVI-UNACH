import React from 'react'

export default function Button({mensaje, className, type, onclick}) {
  return (
    <button type={type} onClick={onclick} className={`rounded-md ${className} border-2 border-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>{mensaje}</button>
  )
}
