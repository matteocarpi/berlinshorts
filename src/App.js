import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import ScrollToTop from './components/scrollToTop';

import Footer from './components/footer';
import Navigation from './components/navigation';
import Home from "./components/pages/home";
import Concept from "./components/pages/concept";

const Scroll = withRouter(ScrollToTop);

function App() {
  return (
    <Router>
      <Scroll>
        <Switch>
          <div className="App">
            <Navigation />

            <Route exact path="/" component={Home} />

            <Route exact path="/concept" component={Concept} />

            <Footer />
          </div>
        </Switch>
      </Scroll>
    </Router>
  );
}

export default App;
