const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  reminders: [{ 
    type: Schema.Types.ObjectId, ref: 'Reminder'
   }],
  refreshTokens: [{
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
})

module.exports = mongoose.model('User', usersSchema)