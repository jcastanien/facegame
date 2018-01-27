import React from "react"
import "./Nav.css"

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper center">
          <a 
            href="/" 
            className="header flow-text">
              New York Times Article Scrubber
          </a>
        </div>
        <div className="nav-content center">
          <span className="nav-title flow-text">
              Search for and annotate articles of interest!
          </span>
        </div>
      </nav>
    )
  }
}