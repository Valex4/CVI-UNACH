import Input from "../atoms/input";
import styled from "styled-components";

function WrapperInput({mensaje, type, name, dato, onchange, activo}) {
    return ( 
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">{mensaje}</label>
                <Input type={type} name={name} dato={dato} onchange={onchange} activo={activo}/>
            </div>

     );
}

export default WrapperInput;



