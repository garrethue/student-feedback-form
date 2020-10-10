import React, { Component } from "react";
//import axios from 'axios';
import "./App.css";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import customTheme from "../theme";
import Header from "../Header/Header";
import Feeling from "../Prompts/Feeling";
import Comments from "../Prompts/Comments";
import Understanding from "../Prompts/Understanding";
import Supported from "../Prompts/Supported";

//use CSSReset so I can customize my CSS
//wrap ThemeProvider to execute my customTheme
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <div className="App">
            <Header />
            <Feeling />
            <Understanding />
            <Supported />
            <Comments />
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
