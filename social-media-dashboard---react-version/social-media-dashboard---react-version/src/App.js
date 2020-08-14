import React, { useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import './App.css'
import FollowersSubscribersCard from './components/Cards/FollowersSubscribersCard'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState('false')

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* permite que o filho Header altere o valor de isDarkTheme */}
      <Header getThemeApp={theme => setIsDarkTheme(theme)} />
      <FollowersSubscribersCard />
    </ThemeProvider>
  )
}

export default App
