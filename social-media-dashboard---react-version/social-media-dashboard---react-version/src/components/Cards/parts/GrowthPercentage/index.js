import React from "react";
// Assets
import upArrow from "../../../../assets/images/icon-up.svg";
import downArrow from "../../../../assets/images/icon-down.svg";
// Styles
import styles from "./styles.module.scss";

// ----------------- Component -----------------------

function GrowthPercentage(props) {
    return (
        <div className={styles.percentage}>
            <img
                className={styles.percentage__arrow}
                alt={props.isPositive ? "plus" : "minus"} 
                src={props.isPositive ? upArrow : downArrow}
            />
            <p
                className={`${styles.percentage__number}  ${
                    styles[
                        `percentage__number--${
                            props.isPositive ? "positive" : "negative"
                        }`
                    ]
                }`}
            >
                {props.value}%
            </p>
        </div>
    );
}

export default GrowthPercentage;
