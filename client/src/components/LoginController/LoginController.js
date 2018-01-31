import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Works from "../Works"
import LoggedIn from "../LoggedIn"

export default class LoginController extends Component {
    render() {
        const { firstName, isLoggedIn, handleLoginClick, handleLogoutClick } = this.props
        let page = null

        if (isLoggedIn) {
            page = <LoggedIn
                onClick={handleLogoutClick}
                firstName={firstName}
            />
        } else {
            page = <Works onClick={handleLoginClick} />
        }

        return (
            <div>
                {page}
            </div>
        )
    }
}

LoginController.props = {
    firstName: Proptypes.string,
    isLoggedIn: Proptypes.bool,
    handleLoginClick: Proptypes.func,
    handleLogoutClick: Proptypes.func
}