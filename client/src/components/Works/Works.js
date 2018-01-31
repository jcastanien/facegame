import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finished: false,
            stepIndex: 0,
        }
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        )
    }

    render() {
        const { firstName, handleChange } = this.props
        const { finished, stepIndex } = this.state

        return (
            <div>
                <h1 className="center">How it works</h1>
                <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>Sign in with Facebook</StepLabel>
                            <StepContent>
                                <p>
                                    Simply click the login button to login with your facebook credentials
                                </p>
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Click "Play FaceGame"</StepLabel>
                            <StepContent>
                                <p>
                                    Click the 'Play FaceGame' to get started
                                </p>
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Connect and compete with friends</StepLabel>
                            <StepContent>
                                <p>
                                    Play against all your friends and compete for the highest score
                                </p>
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Check out high scores!</StepLabel>
                            <StepContent>
                                <p>
                                    All high scores will be kept.  Make sure you get to the top!
                                </p>
                                {this.renderStepActions(3)}
                            </StepContent>
                        </Step>
                    </Stepper>
                    {finished && (
                        <p style={{ margin: '20px 0', textAlign: 'center' }}>
                            <a
                                href="#!"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({ stepIndex: 0, finished: false });
                                }}
                            >
                                Click here
                            </a> to reset the instructions.
                            </p>
                    )}
                </div>
            </div>
        )
    }
}

Works.props = {
    firstName: PropTypes.string,
    handleChange: PropTypes.func
}