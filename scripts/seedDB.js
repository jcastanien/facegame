const mongoose = require("mongoose")
const db = require("../models")
mongoose.Promise = global.Promise

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/facegame",
  {
    useMongoClient: true
  }
)

const gameSeed = [
  {
    firstName: "Test1First",
    lastName: "Test1Last",
    email: "Test1@test.com",
    date: "",
    facebookAuth: {
                accessToken: "test1",
                expiresIn: "test1",
                signedRequest: "test1",
                userID: "test1"

    },
    gameStats: {
              wins: 1,
              losses: 0,
              levelUps: 0,
              shares: 2
    }
  },

  {
    firstName: "Jane",
    lastName: "Doe",
    email: "JDoe@test.com",
    date: "",
    facebookAuth: {
                accessToken: "test2",
                expiresIn: "test2",
                signedRequest: "test2",
                userID: "test2"

    },
    gameStats: {
              wins: 10,
              losses: 5,
              levelUps: 1,
              shares: 9
    }
  },

]

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })