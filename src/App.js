import React from "react";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./Components/Routing";
import Navigation from "./Navigation";
import { Provider } from 'react-redux';
import store from "./actions/store"

function App() {
  return (
    <div className="App">
      {
        <div>
          {console.log('store',store)}
          <Provider store={store}>
            <Router>
              <Navigation></Navigation>
              <Routing></Routing>
            </Router>
          </Provider>
        </div>
     
      }
    </div>
  );
}

export default App;
