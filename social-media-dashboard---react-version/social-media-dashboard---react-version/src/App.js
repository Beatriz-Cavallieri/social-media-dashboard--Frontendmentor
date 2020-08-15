import React, { useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import Main from './components/Main'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState('false')

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* passing this function as props allows the child component Header to chage the value of the isDarkTheme variable: */}
      <Header getThemeApp={theme => setIsDarkTheme(theme)} />
      <Main />
    </ThemeProvider>
  )
}

export default App
