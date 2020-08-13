// as seen on https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --bg-top: hsl(225, 100%, 98%);
    --bg-main: hsl(0, 0%, 100%);
    --card-bg: hsl(227, 47%, 96%);
    --smaller-text: hsl(228, 12%, 44%);
    --bigger-text: hsl(230, 17%, 14%);

    --dark-bg-top: hsl(232, 19%, 15%);
    --dark-bg-main: hsl(230, 17%, 14%);
    --dark-bg-top: hsl(232, 19%, 15%);
    --dark-card-bg: hsl(228, 28%, 20%);
    --dark-smaller-text: hsl(228, 34%, 66%);
    --dark-bigger-text: hsl(0, 0%, 100%);

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
}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `