import "./styles/themes/globalStyle.css"
import { ThemeProvider } from 'styled-components';
import { RouteApp } from "./routes/index.jsx";
import { theme } from "./styles/themes/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouteApp />
    </ThemeProvider>
  )
}

export default App
