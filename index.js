const express = require('express')
const { Batch } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.get('/batches', (req, res, next) => {
  Batch.find()
    .then((batches) => res.json(batches))
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
