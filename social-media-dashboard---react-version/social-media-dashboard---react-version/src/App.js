import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import Main from './components/Main'
import Header from './components/Header'
import styled from 'styled-components'

const BackgroundDetail = styled.div`
    background-color: ${({ theme }) => theme.backgroundDetail};
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    z-index: -1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState('false')
  const [totalFollowers, setTotalFollowers] = useState(0)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* passing this function as props allows the child component Header to chage the value of the isDarkTheme variable: */}
      <BackgroundDetail />
      <Header getThemeApp={theme => setIsDarkTheme(theme)} totalFollowers={totalFollowers} />
      <Main setTotalFollowers={followers => setTotalFollowers(followers)} />
    </ThemeProvider>
  )
}

export default App
