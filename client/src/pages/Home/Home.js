import React from "react"
import API from "../../utils/API"
import Search from "../../components/Search"
import Wrapper from "../../components/Wrapper"
import Results from "../../components/Results"
import Saved from "../../components/Saved"
import Foot from "../../components/Foot"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
      articles: [],
      saved: []
    }
  }

  // When react loads, load all articles
  componentDidMount() {
    this.loadArticles()
  }

  // Function to get all articles in database then set the state saved with the data and clear the state for topic, startYear, and endYear
  loadArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({
          saved: res.data,
          topic: "",
          startYear: "",
          endYear: ""
        })
      })
      .catch(err => console.log(err))
  }

  // Function to save a new article by their title and url to database
  // After saved, reload the articles function to have the new article print to the screen
  saveArticle = (title, url) => {
    API.saveArticle({
      title,
      url
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err))
  }

  // Function to go to the url 
  goArticle = (url) => window.location.href = (url)

  // Function to delete an article by it's id
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err))
  }

  // Function to set state for topic to the user's input
  handleTopicChange = event => {
    this.setState({ topic: event.target.value })
  }

  // Function to set state for startYear to the user's input
  // Once the user puts in the date, we convert the date from 5 January, 2017 to '20170105' so we can pass it through to our API call
  handleStartYearChange = event => {
    this.setState({ startYear: event.target.value })
    this.toDate(this.state.startYear)
  }

  // Function to set state for endYear to the user's input
  // Once the user puts in the date, we convert the date from '5 January, 2017' to '20170105' so we can pass it through to our API call
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value })
    this.toDated(this.state.endYear)
  }

  // Function to set state startYear from '5 January, 2017' to '20170105' for the API call
  toDate = date => {
    let x = date.replace(",", "")

    let y = x.split(" ")

    let a = y[0]
    let b = y[1]
    let c = y[2]

    if (a < 10) {
      a = 0 + a
    }

    if (b === "January") {
      b = "01"
    } if (b === "February") {
      b = "02"
    } if (b === "March") {
      b = "03"
    } if (b === "April") {
      b = "04"
    } if (b === "May") {
      b = "05"
    } if (b === "June") {
      b = "06"
    } if (b === "July") {
      b = "07"
    } if (b === "August") {
      b = "08"
    } if (b === "September") {
      b = "09"
    } if (b === "October") {
      b = "10"
    } if (b === "November") {
      b = "11"
    } if (b === "December") {
      b = "12"
    }

    let newDate = c + b + a
    let finalDate = newDate.toString()

    this.setState({ startYear: finalDate })
  }

  // Function to set state endYear from '5 January, 2017' to '20170105' for the API call
  toDated = date => {
    let x = date.replace(",", "")

    let y = x.split(" ")

    let a = y[0]
    let b = y[1]
    let c = y[2]

    if (a < 10) {
      a = 0 + a
    }

    if (b === "January") {
      b = "01"
    } if (b === "February") {
      b = "02"
    } if (b === "March") {
      b = "03"
    } if (b === "April") {
      b = "04"
    } if (b === "May") {
      b = "05"
    } if (b === "June") {
      b = "06"
    } if (b === "July") {
      b = "07"
    } if (b === "August") {
      b = "08"
    } if (b === "September") {
      b = "09"
    } if (b === "October") {
      b = "10"
    } if (b === "November") {
      b = "11"
    } if (b === "December") {
      b = "12"
    }

    let newDate = c + b + a
    let finalDate = newDate.toString()
    this.setState({ endYear: finalDate })
  }

  // Function for when the submit button is clicked
  // Calls our API and passes topic, startYear, and endYear
  // Once API is finished, set state for articles with the array that is returned
  handleFormSubmit = event => {
    event.preventDefault()

    API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        this.setState({ articles: res.data.response.docs })
      })
      .catch(err => console.log(err))
  }

  // Function to render the searched articles
  // Loop through our array and print our results to the screen
  // saveArticle Function holds each individual key, title, and url so we can use that information to save to our database if needed
  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        key={article._id}
        title={article.headline.main}
        url={article.web_url}
        saveArticle={() => this.saveArticle(article.headline.main, article.web_url)}
      />
    ))
  }

  // Function to render the saved articles
  // Loop through the saved array
  // goArticle Function to go to url for that article
  // deleteArticle Function to delete the article by it's id
  renderSavedArticles = () => {
    return this.state.saved.map(saved => (
      <Saved
        key={saved._id}
        title={saved.title}
        url={saved.url}
        goArticle={() => this.goArticle(saved.url)}
        deleteArticle={() => this.deleteArticle(saved._id)}
      />
    ))
  }

  render() {
    return (
      <Wrapper>
        <Search
          handleTopicChange={this.handleTopicChange}
          handleStartYearChange={this.handleStartYearChange}
          handleEndYearChange={this.handleEndYearChange}
          handleFormSubmit={this.handleFormSubmit}
          renderArticles={this.renderArticles}
          renderSavedArticles={this.renderSavedArticles}
        />
      </Wrapper>
    )
  }
}