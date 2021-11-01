import React, { useState } from "react";
import Main from "../Main";
import Header from "../Header";
import bgStyle from "../BackgroundDetail/style.module.scss";
import globalStyle from "./global.module.scss";

function App() {
    const [totalFollowers, setTotalFollowers] = useState(0);

    return (
        <div className={globalStyle.root}>
            <div className={bgStyle.backgroundDetail} />
            <Header totalFollowers={totalFollowers} />
            <Main
                setTotalFollowers={(followers) => setTotalFollowers(followers)}
            />
        </div>
    );
}

export default App;
