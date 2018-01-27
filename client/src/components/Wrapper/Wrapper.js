import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from 'react-materialize'


export default class Wrapper extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="container">
                <Row>
                    <Col m={6} s={12}>
                        {children}
                    </Col>
                </Row>
            </div>
        )
    }
}

Wrapper.props = {
    children: PropTypes.node
}