import React from "react"
import "./Saved.css"
import { Button, Col, Collection, CollectionItem } from 'react-materialize'
import PropTypes from "prop-types"

export default class Saved extends React.Component {
    render() {
        const { title, goArticle, deleteArticle } = this.props

        return (
            <Collection>
                <Col m={8}>
                    <CollectionItem 
                        className="left-align tooltipped" 
                        href="#!" 
                        data-position="left" 
                        data-tooltip="Go to Article" 
                        data-delay="50" 
                        onClick={goArticle}>
                            {title}
                    </CollectionItem>
                </Col>
                <Col m={4}>
                    <Button 
                        className="delete-btn"
                        waves="light"
                        onClick={deleteArticle}>
                            Delete Article
                    </Button>
                </Col>
            </Collection>
        )
    }
}

Saved.props = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    goArticle: PropTypes.func,
    deleteArticle: PropTypes.func
}