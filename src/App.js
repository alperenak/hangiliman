import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/home/home"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </Router>
  )
}

export default App;
