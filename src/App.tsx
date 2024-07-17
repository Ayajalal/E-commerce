import Header1 from "./components/header/Header1.tsx";
import Header2 from "./components/header/Header2.tsx";
import Header3 from "./components/header/Header3.tsx";
import {ColorModeContext, useMode} from "./theme.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Hero from "./components/hero/hero.tsx";
import Main from "./components/main/main.tsx";
import Footer from "./components/footer/Footer.tsx";
import ScrollToTop from "./components/scroll/ScrollToTop.tsx";


function App() {
const [theme,colorMode]=useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
<Header1/>
      <Header2/>
      <Header3/>
          <Hero/>
          <Main/>
          <Footer/>
          <ScrollToTop/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
