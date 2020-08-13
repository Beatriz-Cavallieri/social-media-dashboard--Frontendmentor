import React, { useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import './App.css'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState('false')

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* permite que o filho Header altere o valor de isDarkTheme */}
      <Header getThemeApp={theme => setIsDarkTheme(theme)} />
    </ThemeProvider>
  )
}

export default App
