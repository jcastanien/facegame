import React, { Component } from "react"
import Navbar from "../../components/Navbar"
import LoginController from "../../components/LoginController"

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      firstName: "Chris"
    }
  }

  handleChange = (event, isLoggedIn) => {
    this.setState({
      isLoggedIn: isLoggedIn,
      // firstName: event.target.value
    })
  }

  // When react loads, load all articles
  componentDidMount() {

  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  facebook = () => {
    // api call to facebook
    alert('please sign in')
    this.handleLoginClick()
  }

  render() {
    return (
      <div>
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          firstName={this.state.firstName}
          handleChange={this.handleChange}
          handleLogoutClick={this.handleLogoutClick}
          facebook={this.facebook}
        />
        <LoginController
          isLoggedIn={this.state.isLoggedIn}
          handleLoginClick={this.handleLoginClick}
          handleLogoutClick={this.handleLogoutClick}
          firstName={this.state.firstName}
        />
      </div>
    )
  }
}