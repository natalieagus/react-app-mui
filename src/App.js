import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode(); //  we have access to the theme and colorMode now

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          Hello world
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
