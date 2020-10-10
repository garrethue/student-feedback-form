import React, { Component } from "react";
//import axios from 'axios';
import "./App.css";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import customTheme from "../theme";

// function App({ children }) {
//   return (
//     <ThemeProvider theme={customTheme}>
//       <CSSReset />
//       {children}
//     </ThemeProvider>
//   );
// }

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4>
                <i>Don't forget it!</i>
              </h4>
            </header>
            <br />
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
