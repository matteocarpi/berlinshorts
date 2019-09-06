import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/navigation';
import Home from "./components/pages/home";
import Concept from "./components/pages/concept";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navigation />



            <Route exact path="/" component={Home} />

            <Route exact path="/concept" component={Concept} />

        </div>
      </Switch>
    </Router>
  );
}

export default App;
