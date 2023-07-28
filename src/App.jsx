import "./styles/themes/globalStyle.css"
import { ThemeProvider } from 'styled-components';
import { RouteApp } from "./routes/index.jsx";


function App() {

  const theme = {
    'white': '#fff',
    'fontColor': '#141414',
    'backgroundColor': '#dfdeda',
    'buttonColor': '#5d740c', 
    'buttonHover': '#d4a15f', 

    'primaryFont': 'Poppins'
  }

  return (
    <ThemeProvider theme={theme}>
      <RouteApp/>
    </ThemeProvider>
  )
}

export default App
