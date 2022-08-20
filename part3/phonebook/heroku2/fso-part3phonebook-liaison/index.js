//https://fso-part3phonebook-liaison.herokuapp.com/
const express = require('express')
const morgan  = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
morgan.token('custom', (request) => {
  return 'POST' === request.method ? JSON.stringify(request.body) : ' '
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :custom'))
app.use(express.static('build'))

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]
 
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const count = persons.length;
  let   date  = new Date();
  const res = `
  <p>Phonebook has info for ${count} people</p>
  <p>${date}</p>
  `
  response.send(res)
})


app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  let newOne = request.body;
  if (!newOne.name || !newOne.number) {
    return response.status(400).json({
      error: 'The name or number can not be null',
    })
  }
  const isExisting = persons.filter((list) => list.name === newOne.name);
  if (1 === isExisting.length) {
    return response.status(400).json({
      error: 'name must be unique' 
    })
  } else {
    newOne.id = Math.floor(Math.random() * 1000);
  }

  response.json(newOne)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})