import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'

const styles = {
    root: {
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    keyboardFocused: {
        keyboardFocused: 'indigo lighten-1'
    }
}

class Navbar extends React.Component {
    render() {
        const { classes, isLoggedIn, handleLogoutClick, facebook } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static" className="indigo lighten-1">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            FaceGame
                        </Typography>
                        {isLoggedIn ?
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={handleLogoutClick}>
                                Logout
                            </Button>
                            :
                            <Button
                                className={classes.button}
                                color="inherit"
                                onClick={facebook}
                                keyboardFocusedClassName={classes.keyboardFocused}>
                                Login
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Navbar.props = {
    isLoggedIn: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    handleLogoutClick: PropTypes.func,
    facebook: PropTypes.func
}

export default withStyles(styles)(Navbar)