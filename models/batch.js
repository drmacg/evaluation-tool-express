const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  imageUrl: { type: String, required: true }
})

const batchSchema = new Schema({
  batchNumber: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  students: [studentSchema]
})

module.exports = mongoose.model('batches', batchSchema)
