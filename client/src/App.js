import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from "./pages/Home"
import Footer from "./components/Footer"

const App = () => (

  <Router>
    <div>
      <MuiThemeProvider>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </div>
  </Router>

)

export default App