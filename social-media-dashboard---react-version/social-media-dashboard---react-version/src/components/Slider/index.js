import React from "react";

// Styles
import styles from "./styles.module.scss";

// ------ Slider component
function Slider({ initialValue, onChange }) {
    const [checked, setChecked] = React.useState(initialValue ?? false);

    const handleChange = (event) => {
        const { value } = event.target;
        setChecked(value);
        if (onChange) onChange(value);
    };

    // Render
    return (
        <label className={styles.toggle}>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span></span>
        </label>
    );
}

export default Slider;
