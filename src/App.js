import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import PlanPage from "./components/PlanPage/PlanPage";
import Dnd from "./Dnd";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/plan">
          <PlanPage />
        </Route>
        <Route exact path="/dnd">
          <Dnd />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
