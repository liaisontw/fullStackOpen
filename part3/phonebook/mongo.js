const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://mongodbcluster:${password}@cluster0.dpksglo.mongodb.net/test2?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
  },
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'Ada Lovelace',
  number: '040-1231236',
})

person.save().then(result => {
  console.log(`added ${person.name} number ${person.number} to phonebook`)
  mongoose.connection.close()
})

