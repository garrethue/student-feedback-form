import React, { Component } from "react";
// import "./App.css";

//chakra ui
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

//prompt components
import customTheme from "../theme";
import Header from "../Header/Header";
import Feeling from "../Prompts/Feeling";
import Comments from "../Prompts/Comments";
import Understanding from "../Prompts/Understanding";
import Supported from "../Prompts/Supported";
import Review from "../Prompts/Review";

//wrap ThemeProvider to execute my customTheme
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset /> {/*remove browser default CSS*/}
          <div className="App">
            <Header />
            <Feeling />
            <Understanding />
            <Supported />
            <Comments />
            <Review />
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
