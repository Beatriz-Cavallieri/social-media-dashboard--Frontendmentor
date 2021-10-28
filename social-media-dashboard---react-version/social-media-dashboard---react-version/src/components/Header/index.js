import React from "react";

// Components
import Slider from "../Slider";
import { ColorThemeSelectionWrapper, TitleWrapper } from "./styles";

// Utils
import { numberFormat } from "../../utils/functions";

function Header({ totalFollowers }) {
    return (
        <header>
            <TitleWrapper>
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: {numberFormat(totalFollowers)}</h3>
            </TitleWrapper>
            <ColorThemeSelectionWrapper>
                <h3>Dark Mode</h3>
                <Slider />
            </ColorThemeSelectionWrapper>
        </header>
    );
}

export default Header;