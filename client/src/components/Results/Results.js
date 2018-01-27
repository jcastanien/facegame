import React from "react"
import "./Results.css"
import { Button, Collection, CollectionItem, Toast } from 'react-materialize'
import PropTypes from "prop-types"

export default class Results extends React.Component {
    render() {
        const { title, url, saveArticle } = this.props

        return (
            <Collection>
                <CollectionItem
                    className="left-align custom-text"
                    hre="#!">
                        {title}
                    <div 
                        className="right"
                        onClick={saveArticle}>
                        <Toast 
                            toast="SAVED">
                                Save Article
                        </Toast>
                    </div>
                    <Button
                        className="read-btn right"
                        waves='light'
                        node='a'
                        target="_blank"
                        href={url}>
                            Read Article
                    </Button>
                </CollectionItem>
            </Collection>
        )
    }
}

Results.props = {
    title: PropTypes.string,
    url: PropTypes.string,
    saveArticle: PropTypes.func
}