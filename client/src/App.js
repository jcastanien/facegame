import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from "./pages/Home"

export default class App extends Component {
  render() {
    return (

      <Router>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    )
  }
}