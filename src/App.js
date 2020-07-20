import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from "./components/index"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact={true} />
      </Switch>
    </Router>
  )
}

export default App;
