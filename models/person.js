const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  town: String,
  movie: String
});

module.exports = Person;
