import React from 'react'
import PropTypes from "prop-types"

export default class Container extends React.Component{
    render() {
        const { children } = this.props
        return (
            <div className="container">
                {children}
            </div>
        )
    }
}

Container.props = {
    children: PropTypes.node
}