import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Main from "./components/Main";
import Header from "./components/Header";
import styled from "styled-components";

import {light, dark} from './style/themes'

const BackgroundDetail = styled.div`
    background-color: ${light.backgroundDetail};
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    z-index: -1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

function App() {
    const [totalFollowers, setTotalFollowers] = useState(0);

    return (
        <>
            <GlobalStyles />
            <BackgroundDetail />
            <Header totalFollowers={totalFollowers} />
            <Main
                setTotalFollowers={(followers) => setTotalFollowers(followers)}
            />
        </>
    );
}

export default App;
