import Input from "../atoms/input";
import styled from "styled-components";

function WrapperInput({mensaje, type, name, dato, onchange}) {
    return ( 
            <StyledDiv>
                <StyledLabel>{mensaje}</StyledLabel>
                <Input type={type} name={name} dato={dato} onchange={onchange} />
            </StyledDiv>

     );
}

export default WrapperInput;

const StyledDiv = styled.div`
    border: 2px solid red;
`

const StyledLabel = styled.label`
    font-family: 'Inter';
    font-size: 1.4em;
    font-style: normal;
    font-weight:${props => props.grosor ? '400' : '400'};
    line-height: normal;
    text-align:${props => props.aling ? 'center' : 'left'};
`
