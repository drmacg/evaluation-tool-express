const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  colorCode: { type: String, required: true},
  evaluationDate: { type: String, required: true},
  remark: { type: String, required: false}

})

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  evaluations: [evaluationSchema]
})

const batchSchema = new Schema({
  batchNumber: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  students: [studentSchema]
})

module.exports = mongoose.model('batches', batchSchema)
