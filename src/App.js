import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/pages/home';
import Concept from './components/pages/concept';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/concept" component={Concept} />
    </BrowserRouter>


    </div>
  );
}

export default App;
