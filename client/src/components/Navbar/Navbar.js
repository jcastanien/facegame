import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

export default class Navbar extends Component {
    render() {
        const { firstName, isLoggedIn, handleLoginClick, handleLogoutClick, facebook } = this.props

        return (
            <AppBar
                className="indigo lighten-1"
                title="FaceGame"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={isLoggedIn ?
                    <IconMenu
                        iconButtonElement={
                            <IconButton>
                                <MoreVertIcon className="white-text" />
                            </IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        <MenuItem primaryText="Help" />
                        <MenuItem
                            primaryText="Sign out"
                            onClick={handleLogoutClick}
                        />
                    </IconMenu>
                    :
                    <FlatButton
                        label="Login"
                        onClick={facebook}
                        className="white-text"
                        style={{ marginTop: 8 }}
                    />}
            />
        )
    }
}

Navbar.props = {
    logged: PropTypes.bool,
    firstName: PropTypes.string,
    handleLoginClick: PropTypes.func,
    handleLogoutClick: PropTypes.func,
    facebook: PropTypes.func
}