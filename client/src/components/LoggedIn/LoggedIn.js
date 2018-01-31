import React from 'react'
import Welcome from '../Welcome'

export default class LoggedIn extends React.Component {
    render() {
        const { firstName } = this.props

        return (
            <div>
                <Welcome firstName={firstName} />
                <h1 className="center">You're signed in!</h1>
            </div>
        )
    }
}