// as seen on https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --toggle-blue: hsl(210, 78%, 56%);
    --toggle-green: hsl(146, 68%, 55%);
    --toggle-gray: hsl(230, 22%, 74%);
}

* {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

a {
    color: inherit;
}

h1 {
    font-size: 24px;
}

h2 {
    font-size: 20px;
}

body {
    margin: 0 auto;  
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    padding: 20px 8%;
    background: ${({ theme }) => theme.background};
}

 
h1,
.number {
    color: ${({ theme }) => theme.bigText};
}

h2, h3, h4
.under {
    color: ${({ theme }) => theme.smallText};
}

.box {
    background-color: ${({ theme }) => theme.card};
}
`