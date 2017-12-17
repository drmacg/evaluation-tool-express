const express = require('express')
const { User } = require('./models')
const passport = require('./config/auth')
const bodyParser = require('body-parser')
const {users, sessions, batches} = require('./routes')
const cors = require('cors')

const PORT = process.env.PORT || 3030

let app = express()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())

app.use(users)
app.use(sessions)
app.use(batches)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
