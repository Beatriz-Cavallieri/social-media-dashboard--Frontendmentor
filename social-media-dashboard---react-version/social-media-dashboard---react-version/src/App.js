import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState('false')
  const [totalFollowers, setTotalFollowers] = useState(0)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* passing this function as props allows the child component Header to chage the value of the isDarkTheme variable: */}
      <Header getThemeApp={theme => setIsDarkTheme(theme)} totalFollowers={totalFollowers} />
      <Main setTotalFollowers={followers => setTotalFollowers(followers)} />
    </ThemeProvider>
  )
}

export default App
