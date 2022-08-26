//https://fso-part3phonebook-liaison.herokuapp.com/
require('dotenv').config()
const express = require('express')
const morgan  = require('morgan')
const app = express()
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('custom', (request) => {
  return 'POST' === request.method ? JSON.stringify(request.body) : ' '
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :custom'))



const Person = require('./models/Person')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const count = Person.length;
  let   date  = new Date();
  const res = `
  <p>Phonebook has info for ${count} people</p>
  <p>${date}</p>
  `
  response.send(res)
})


app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(list => {
      if (list) {
        response.json(list)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

 
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if ( (body.name === undefined) || (body.number === undefined) ) {
    return response.status(400).json({ error: 'content missing' })
  }

  const theOne = new Person({
    name: body.name,
    number: body.number,
  })

  theOne.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
