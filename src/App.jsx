import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import tw from "tailwind.macro";
import Navbar from "./components/Navbar";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

const Wrapper = styled.div`
  ${tw`min-h-full`}
`;

const Text = styled.h2`
  ${tw`z-10 absolute text-white`}
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Navbar />
          <Text>
            <p>Some text which should be below my nav there is text here</p>
          </Text>

          <Switch>
            <Route path="/OurStory">
              <OurStory />
            </Route>
            <Route path="/Menu">
              <Menu />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route render={() => <h2>This Page Does Not Exist</h2>} />
          </Switch>
        </Wrapper>
      </Router>
    </div>   
  );
}

export default App;
