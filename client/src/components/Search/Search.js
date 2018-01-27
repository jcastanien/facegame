import React from "react"
import "./Search.css"
import SearchBar from "../SearchBar"
import SearchBtn from "../SearchBtn"
import SearchWrapper from "../SearchWrapper"
import { Card, Input } from 'react-materialize'
import PropTypes from "prop-types"

export default class Search extends React.Component {
    render() {
        const { topic, startYear, endYear, handleTopicChange, handleStartYearChange, handleEndYearChange, handleFormSubmit, renderArticles, renderSavedArticles } = this.props

        return (
            <div>
                <Card 
                    className="blue-grey darken-1" 
                    textClassName="white-text center" 
                    title="Search for Articles">
                    <SearchWrapper>
                        <p className="flow-text center white-text">
                            Topic
                        </p>
                        <SearchBar>
                            <input
                                id="topic"
                                type="search"
                                required
                                onChange={handleTopicChange}
                                value={topic}
                                name="topic"
                                placeholder="hockey"
                            />
                            <label 
                                className="label-icon" 
                                htmlFor="topic">
                                <i className="material-icons">
                                    search
                                </i>
                            </label>
                            <i className="material-icons">
                                close
                            </i>
                        </SearchBar>
                        <p className="flow-text center white-text wrapper-two">
                            Start Date
                        </p>
                        <SearchBar>
                            <Input
                                id="startYear"
                                type="date"
                                required
                                onChange={handleStartYearChange}
                                value={startYear}
                                name="startYear"
                            />
                        </SearchBar>
                        <p className="flow-text center white-text wrapper-two">
                            End Date
                        </p>
                        <SearchBar>
                            <Input
                                id="endYear"
                                type="date"
                                required
                                onChange={handleEndYearChange}
                                value={endYear}
                                name="endYear"
                            />
                        </SearchBar>
                    </SearchWrapper>
                    <SearchBtn onClick={handleFormSubmit} />
                </Card>
                <Card 
                    className="blue-grey darken-1" 
                    textClassName="white-text center" 
                    title="Results">
                    <SearchWrapper>
                        {renderArticles()}
                    </SearchWrapper>
                </Card>
                <Card 
                    className="blue-grey darken-1" 
                    textClassName="white-text center" 
                    title="Saved Articles">
                    <SearchWrapper>
                        {renderSavedArticles()}
                    </SearchWrapper>
                </Card>
            </div>
        )
    }
}

Search.props = {
    topic: PropTypes.string,
    startYear: PropTypes.number,
    endYear: PropTypes.number,
    handleTopicChange: PropTypes.func,
    handleStartYearChange: PropTypes.func,
    handleEndYearChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    renderArticles: PropTypes.func,
    renderSavedArticles: PropTypes.func
}