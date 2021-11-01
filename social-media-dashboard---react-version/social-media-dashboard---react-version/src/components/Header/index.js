import React from "react";

// Components
import Slider from "../Slider";
import styles from "./styles.module.scss";

// Utils
import { numberFormat } from "../../utils/functions";

function Header({ totalFollowers }) {
    return (
        <header>
            <div className={styles.title__wrapper}>
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: {numberFormat(totalFollowers)}</h3>
            </div>
            <div className={styles.colorThemeSelection__wrapper}>
                <h3>Dark Mode</h3>
                <Slider />
            </div>
        </header>
    );
}

export default Header;
