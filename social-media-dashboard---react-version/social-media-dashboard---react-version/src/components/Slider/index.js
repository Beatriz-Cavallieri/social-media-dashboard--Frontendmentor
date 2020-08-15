import React from 'react'
import styled from 'styled-components'

//------ SliderWrapper styled component 
const SliderWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
    input {
        opacity: 0;
        height: 0;
        width: 0;
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        background-color: var(--toggle-gray);
        transition: .3s;
        border-radius:34px;
        &:before {
            /* circle */
            border-radius: 50%;
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 3px;
            background-color: ${({ theme }) => theme.background};
            transition: .4s;
        }
    }

    /* round edges outside + circle movement */
    input:checked + span {
        background-image: linear-gradient(to right, var(--toggle-blue), var(--toggle-green));
        &:before {
        transform: translateX(24px); 
        }
    }

    input:focus + span {
        box-shadow: 0 0 3px hsl(210, 78%, 56%);
    }
`
//------ SliderWrapper styled component 

//------ Slider component
export default function Slider({ getThemeHeader }) {
    return (
        <SliderWrapper>
            <input type="checkbox" onClick={event => getThemeHeader(event.target.checked)} />
            <span></span>
        </SliderWrapper>
    )
}
