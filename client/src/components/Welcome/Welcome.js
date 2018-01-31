import React from 'react'

export default class Welcome extends React.Component {
    render() {
        const { firstName } = this.props

        return (
            <h4>Welcome {firstName}!</h4>
        )
    }
}