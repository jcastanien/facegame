import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        const { firstName } = this.props

        return (
            <h4>Welcome {firstName}!</h4>
        )
    }
}