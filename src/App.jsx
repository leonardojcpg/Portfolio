import "./styles/themes/globalStyle.css"
import {Home} from './pages/home'
import { ThemeProvider } from 'styled-components';


function App() {

  const theme = {
    'white': '#fff',
    'fontColor': '#141414',
    'backgroundColor': '#dfdeda',
    'buttonColor': '#5d740c', 
    'buttonHover': '#d4a15f'
  }

  return (
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
  )
}

export default App
