const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  imageUrl: { type: String, required: true }
})

const batchSchema = new Schema({
  batchNumber: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  students: [studentSchema]
})

module.exports = mongoose.model('batches', batchSchema)
