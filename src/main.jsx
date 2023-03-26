import App from './App'
import React from 'react'
import { theme } from './style/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/globalStyle'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
