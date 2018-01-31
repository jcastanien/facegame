import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
      </Router>
    )
  }
}