import { createGlobalStyle } from 'styled-components';

import { light, dark } from "../../style/themes";

export const GlobalStyles = createGlobalStyle`
:root {
    --toggle-blue: hsl(210, 78%, 56%);
    --toggle-green: hsl(146, 68%, 55%);
    --toggle-gray: hsl(230, 22%, 74%);

    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram-yellow: hsl(37, 97%, 70%);
    --instagram-pink: hsl(329, 70%, 58%);
    --youtube: hsl(348, 97%, 39%);
}

* {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    transition: 0.4s;
}

a {
    color: inherit;
}

h1 {
    font-size: 24px;
    color: ${light.bigText};
}

h2 {
    font-size: 20px;
}

h2, h3, h4
{
    color: ${light.smallText};
}

body {
    margin: 0 auto;  
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    padding: 20px 8%;
    background: ${light.background};
}

img {
    width: 16px;
    height: 16px;
    align-self: flex-end;
}

/* Tablet */
@media only screen and (min-width: 768px) {
    header {
        display: flex;
        justify-content: space-between;
    }
}
`