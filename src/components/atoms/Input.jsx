import { Field } from "formik";
import { useState } from "react";
function Input({ type, name, dato, onchange, activo}) {
    return ( 
        <>
            <div className="mt-2">
                <Field type={type} disabled={activo} name={name} value={dato} onChange={onchange} className={`block w-full px-2 pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-[#18386B] sm:text-sm sm:leading-6 ${activo ? 'cursor-not-allowed' : 'cursor-text'}`} />          
            </div>
        </>
     );
}

export default Input;
