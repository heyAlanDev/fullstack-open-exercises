const uniqueValidator = require('mongoose-unique-validator')
const { Schema, model } = require('mongoose')

const personSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
    minLength: 3
  },
  number: {
    type: String,
    require: true,
    minLength: 8
  }
})

personSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(uniqueValidator)

const Person = model('Person', personSchema)

module.exports = { Person }
