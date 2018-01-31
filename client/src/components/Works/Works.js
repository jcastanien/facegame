import React from 'react'
import "./Works.css"
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Col from "../Col"

const styles = theme => ({
    root: {
        width: '100%'
    },
    button: {
        marginRight: theme.spacing.unit
    },
    actionsContainer: {
        marginTop: theme.spacing.unit * 5,
        marginBottom: theme.spacing.unit * 40
    },
    resetContainer: {
        marginTop: 0,
        padding: theme.spacing.unit * 3 // TODO: See TODO note on Stepper
    }
})

function getSteps() {
    return ['Sign in with Facebook', 'Click "Play FaceGame"', 'Connect and compete with friends', 'Check out high scores!']
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Simply click the login button located at the top right of the screen to login with your facebook credentials'
        case 1:
            return 'Click the "Play FaceGame" button to get started'
        case 2:
            return 'Play against all your friends and compete for the highest score'
        case 3:
            return 'All high scores will be kept.  Make sure you get to the top'
        default:
            return 'Unknown step'
    }
}

class Works extends React.Component {
    state = {
        activeStep: 0,
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        })
    }

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        })
    }

    handleReset = () => {
        this.setState({
            activeStep: 0,
        })
    }

    render() {
        const { classes } = this.props
        const steps = getSteps()
        const { activeStep } = this.state

        return (
            <div className="row">
                <Col m={6} offset="m3" s={12}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    raised
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            )
                        })}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Click RESET to read the instructions again</Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Col>
            </div>
        )
    }
}

Works.propTypes = {
    classes: PropTypes.object,
    firstName: PropTypes.string,
    handleChange: PropTypes.func
}

export default withStyles(styles)(Works)