import React from "react"
import "./SearchWrapper.css"
import PropTypes from "prop-types"

export default class SearchWrapper extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="search-wrapper">
                {children}
            </div>
        )
    }
}

SearchWrapper.props = {
    children: PropTypes.node
}