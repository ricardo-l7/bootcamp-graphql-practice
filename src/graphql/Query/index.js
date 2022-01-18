const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')
const Publisher = require('./Publisher')
const Book = require('./Book')

const resolvers = [Welcome, Author, Book, Publisher]

module.exports = merge(...resolvers)
