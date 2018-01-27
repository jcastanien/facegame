import React from "react"
import "./SearchBar.css"
import PropTypes from "prop-types"

export default class SearchBar extends React.Component {
    render() {
        const { children } = this.props

        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            {children}
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}

SearchBar.props = {
    children: PropTypes.node
}