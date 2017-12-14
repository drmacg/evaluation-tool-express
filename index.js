const express = require('express')
const { Batch } = require('./models')
const { User } = require('./models')
const passport = require('./config/auth')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const sessions = require('./routes/sessions')
const cors = require('cors')

const PORT = process.env.PORT || 3030

let app = express()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.get('/batches', (req, res, next) => {
  Batch.find()
    .then((batches) => res.json(batches))
    .catch((error) => next(error))
})

app.post('/batches',
    passport.authorize('jwt', { session: false }),
    (req, res, next) => {
      let newBatch = req.body
      //newBatch.authorId = req.account._id

      Batch.create(newBatch)
        .then((batch) => res.json(batch))
        .catch((error) => next(error))
    })

app.use(users)
app.use(sessions)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
