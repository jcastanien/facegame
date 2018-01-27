const path = require("path")
const router = require("express").Router()
const db = require("../models")

const articleFunctions = {
  // Find all articles in database
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // Create new article in database
  create: function (req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  // Delete article in database
  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}

// route to find all in database
router.get('/api/articles', articleFunctions.findAll)

// route to post/create in database
router.post('/api/articles', articleFunctions.create)

//route to delete by id in database
router.delete("/api/articles/:id", articleFunctions.remove)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router