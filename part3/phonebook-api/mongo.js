const mongoose = require('mongoose')
const { Person } = require('./Schema/Person')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <your-db-password>'
  )
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://alanAdmin:${password}@cluster0.ey6a8e7.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

if (process.argv.length === 3) {
  Person
    .find({})
    .then(persons => {
      console.log('Phonebook:')
      persons.forEach(({ name, number }) => console.log(`${name} ${number}`))
      mongoose.connection.close()
      process.exit()
    })
}

const person = new Person({
  name: process.argv[3],
  number: process.argv[4]
})

person.save().then(personToDB => {
  console.log(
    `added ${personToDB.name} number ${personToDB.number} to phonebook`
  )
  mongoose.connection.close()
})
