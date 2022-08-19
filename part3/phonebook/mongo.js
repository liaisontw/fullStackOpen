const mongoose = require('mongoose')

if ( ( 3 !== process.argv.length ) && ( 5 !== process.argv.length ) ){
  console.log('Please use the format to fetch: node mongo.js <password>')
  console.log('Or use the format to save: node mongo.js <password> <name> <number>')
  process.exit(1)
}

//console.log(process.argv.length)
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

if ( 3 === process.argv.length ) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

if ( 5 === process.argv.length ) {
  let person = new Person({
    name: '',
    number: '',
  })

  person.name = process.argv[3];
  person.number = process.argv[4];

  person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}



