import React, { Component } from "react";

//bring in router
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
import Welcome from "../Prompts/Welcome";
import Admin from "../Admin/Admin";
import ThankYou from "../Prompts/ThankYou";

//wrap ThemeProvider to execute my customTheme
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset /> {/*remove browser default CSS*/}
          <div className="App">
            <Header />
          </div>
          <Router>
            <Switch>
              {/* NEED A WELCOME PAGE????*/}
              <Route exact path="/" component={Welcome} />
              <Route path="/feeling" component={Feeling} />
              <Route path="/understanding" component={Understanding} />
              <Route path="/supported" component={Supported} />
              <Route path="/comments" component={Comments} />
              <Route path="/review" component={Review} />
              <Route path="/admin" component={Admin} />
              <Route path="/thankyou" component={ThankYou} />
            </Switch>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
