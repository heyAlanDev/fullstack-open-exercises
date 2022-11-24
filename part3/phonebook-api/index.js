require('dotenv').config()
require('./mongo.js')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { Person } = require('./models/Person')
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')

const app = express()

app.use(express.json())
app.use(cors())

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms; :body - :req[content-type]'
  )
)

const persons = [
  { id: 1, name: 'Arto Hellas ', number: '040-123456' },
  { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
  { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
  { id: 4, name: 'Mary Poppendick', number: '39-23-6423 122' }
]

app.get('/', (_req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/info', (_req, res, next) => {
  Person.find({})
    .then(persons => {
      res.send(
        `<p>Phonebook has info for ${
          persons.length
        } people</p><p>${new Date()}</p>`
      )
    })
    .catch(err => next(err))
})

app.get('/api/persons', (_req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(err => next(err))
})

app.delete('/api/persons/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const response = await Person.findByIdAndDelete(id)
    if (response === null) return res.sendStatus(404)
    res.sendStatus(204)
  } catch {
    err => next(err)
  }
})

app.post('/api/persons', async (req, res) => {
  const body = req.body

  // if (!body.name || !body.number) {
  //   return res.status(400).json({
  //     error: 'Name o Phone missing'
  //   })
  // }

  const newPerson = new Person({
    name: body.name,
    number: body.number
  })

  try {
    const savedPerson = await newPerson.save()
    res.json(savedPerson)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.put('/api/persons/:id', (req, res, next) => {
  const { id } = req.params
  const person = req.body

  const newPersonInfo = {
    name: person.name,
    number: person.number
  }

  Person.findByIdAndUpdate(id, newPersonInfo, { new: true })
    .then(result => {
      res.json(result)
    })
    .catch(next)
})

app.use(notFound)
app.use(handleErrors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
