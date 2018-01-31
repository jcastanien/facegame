import React, { Component } from 'react'
import "./Footer.css"
import Col from "../Col"

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer blue-grey darken-3">
                <div className="container">
                    <div className="row">
                        <Col l={6} s={12}>
                            <h5 className="white-text">FaceGame</h5>
                            <p className="grey-text text-lighten-4">A Facebook game everyone can play!</p>
                        </Col>
                        <Col l={4} offset="l2" s={12}>
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://reactjs.org/" target="_blank">React</a></li>
                                <li><a className="grey-text text-lighten-3" href="http://materializecss.com/about.html" target="_blank">Materialize</a></li>
                                <li><a className="grey-text text-lighten-3" href="http://www.material-ui.com/#/" target="_blank">Materialize-UI</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                            </ul>
                        </Col>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © Good Guy Coderz, LLC.
                    <a className="grey-text text-lighten-4 right" href="#!">https://www.goodguycoderz.com</a>
                    </div>
                </div>
            </footer>
        )
    }
}