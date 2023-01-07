import { Calculadora } from './component/Calculadora'
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: grey[300],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        height: '96vh',
        background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)'
      }}>
        <Calculadora />
      </Box>
    </ThemeProvider>
  )
}

export default App
