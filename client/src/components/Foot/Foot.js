import React from 'react'
import Container from "../Container"
import { Footer, Col, Row  } from 'react-materialize'


export default class Foot extends React.Component {
    render() {
        return (
            <footer className="page-footer blue-grey darken-4">
                <Container>
                    <Row>
                        <Col l={6} s={12}>
                            <h5 className="white-text">New York Times React App</h5>
                            <p className="grey-text text-lighten-4">Search for and annotate articles of interest!</p>
                        </Col>
                        <Col l={4} offset="l2" s={12}>
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://reactjs.org/" target="_blank">React</a></li>
                                <li><a className="grey-text text-lighten-3" href="http://materializecss.com/about.html" target="_blank">Materialize</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://react-materialize.github.io/#/" target="_blank">React-Materialize</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.nytimes.com/" target="_blank">New York Times</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright">
                    <Container>
                        © 2017 Good Guy Coderz
                        <a className="grey-text text-lighten-4 right" href="#!">www.goodguycoderz.com</a>
                    </Container>
                </div>
            </footer>
        )
    }
}