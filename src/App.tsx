import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invest from "./pages/Invest";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";

declare module '@mui/material/styles' {
  interface TypeBackground {
    navBackground: string; // Adicionando sua propriedade personalizada
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
			navBackground: "#bcdfe8"
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home /> }/>
					<Route path="/invest" element={ <Invest /> }/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
