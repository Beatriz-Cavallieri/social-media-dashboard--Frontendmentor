import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Main from "./components/Main";
import Header from "./components/Header";
import BackgroundDetail from './components/BackgroundDetail'

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
