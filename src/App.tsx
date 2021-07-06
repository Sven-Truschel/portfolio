import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as themes from "./theme/schema.json";
import { setLocalStorage } from "./utils/storage";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";

import About from "./pages/About";
import Home from "./pages/Home";

const Container = styled.div`
  margin: 15px auto 15px auto;
`;

function App() {
  setLocalStorage("all-themes", themes);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Router>
              <Container>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <Home setSelectedTheme={setSelectedTheme}/>
                  </Route>
                </Switch>
              </Container>
            </Router>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
