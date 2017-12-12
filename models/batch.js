const mongoose = require('../config/database')
const { Schema } = mongoose

const batchSchema = new Schema({
  batchNumber: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true }
})

module.exports = mongoose.model('evaluation-tool', batchSchema)
