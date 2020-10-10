import React, { Component } from "react";
//import axios from 'axios';
import "./App.css";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import customTheme from "../theme";
import Header from "../Header/Header";
import Feeling from "../Prompts/Feeling";
import Comments from "../Prompts/Comments";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <div className="App">
            <Header />
            <Feeling />
            <Comments />

            <br />
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
