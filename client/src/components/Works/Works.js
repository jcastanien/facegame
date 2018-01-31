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
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    resetContainer: {
        marginTop: 0,
        padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
    },
});

function getSteps() {
    return ['Sign in with Facebook', 'Click "Play FaceGam"', 'Connect and compete with friends', 'Check out high scores!']
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
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

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
                            );
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



// Works.props = {
//     classes: PropTypes.object,
//     firstName: PropTypes.string,
//     handleChange: PropTypes.func
// }

// export default class Works extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             finished: false,
//             stepIndex: 0,
//         }
//     }

//     handleNext = () => {
//         const { stepIndex } = this.state;
//         this.setState({
//             stepIndex: stepIndex + 1,
//             finished: stepIndex >= 3,
//         })
//     }

//     handlePrev = () => {
//         const { stepIndex } = this.state
//         if (stepIndex > 0) {
//             this.setState({ stepIndex: stepIndex - 1 })
//         }
//     }

//     renderStepActions(step) {
//         const { stepIndex } = this.state

//         return (
//             <div style={{ margin: '12px 0' }}>
//                 <Button
//                     label={stepIndex === 3 ? 'Finish' : 'Next'}
//                     disableTouchRipple={true}
//                     disableFocusRipple={true}
//                     primary={true}
//                     onClick={this.handleNext}
//                     style={{ marginRight: 12 }}

//                 />
//                 {step > 0 && (
//                     <Button
//                         label="Back"
//                         disabled={stepIndex === 0}
//                         disableTouchRipple={true}
//                         disableFocusRipple={true}
//                         onClick={this.handlePrev}
//                     />
//                 )}
//             </div>
//         )
//     }

//     render() {
//         const { firstName, handleChange } = this.props
//         const { finished, stepIndex } = this.state

//         return (
//             <div>
//                 <h1 className="center">How it works</h1>
//                 <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
//                     <Stepper activeStep={stepIndex} orientation="vertical">
//                         <Step>
//                             <StepLabel>Sign in with Facebook</StepLabel>
//                             <StepContent>
//                                 <p>
//                                     Simply click the login button located at the top right of the screen to login with your facebook credentials
//                                 </p>
//                                 {this.renderStepActions(0)}
//                             </StepContent>
//                         </Step>
//                         <Step>
//                             <StepLabel>Click 'Play FaceGame'</StepLabel>
//                             <StepContent>
//                                 <p>
//                                     Click the 'Play FaceGame' button to get started
//                                 </p>
//                                 {this.renderStepActions(1)}
//                             </StepContent>
//                         </Step>
//                         <Step>
//                             <StepLabel>Connect and compete with friends</StepLabel>
//                             <StepContent>
//                                 <p>
//                                     Play against all your friends and compete for the highest score
//                                 </p>
//                                 {this.renderStepActions(2)}
//                             </StepContent>
//                         </Step>
//                         <Step>
//                             <StepLabel>'Check out high scores!'</StepLabel>
//                             <StepContent>
//                                 <p>
//                                     All high scores will be kept.  Make sure you get to the top!
//                                 </p>
//                                 {this.renderStepActions(3)}
//                             </StepContent>
//                         </Step>
//                     </Stepper>
//                     {finished && (
//                         <p style={{ margin: '20px 0', textAlign: 'center' }}>
//                             <a
//                                 href="#!"
//                                 onClick={(event) => {
//                                     event.preventDefault()
//                                     this.setState({ stepIndex: 0, finished: false })
//                                 }}
//                             >
//                                 Click here
//                             </a> to reset the instructions.
//                             </p>
//                     )}
//                 </div>
//             </div>
//         )
//     }
// }