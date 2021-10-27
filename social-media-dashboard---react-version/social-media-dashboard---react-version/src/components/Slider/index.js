import React from "react";

import { SliderWrapper } from "./styles";

//------ Slider component
function Slider({ initialValue, onChange }) {
    const [checked, setChecked] = React.useState(initialValue ?? false);

    const handleChange = (event) => {
        const { value } = event.target;
        setChecked(value);
        if (onChange) onChange(value);
    };
    
    // Render
    return (
        <SliderWrapper>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span></span>
        </SliderWrapper>
    );
}

export default Slider;
