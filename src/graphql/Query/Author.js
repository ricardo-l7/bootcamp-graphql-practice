const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async () => {
    try {
        const authors = await Author.query()
        return authors
    } catch (err) {
        console.log(err)
        throw new Error('failed to get authors')
    }
    
}

const author = async (obj, {id}, context) => {
    try {
        const author = await Author.query().findOne('id', id)
        return author
    } catch (err) {
        console.log(err)
        throw new Error('failed to get author with that id')
    }
    
}

const books = async ({id}, params, context) => {
    const b = await Book.query().where('authorId', id)
    return b
}

const resolver = {
    Query: {
        allAuthors,
        author
    },
    Author: {
        books
    }
}

module.exports = resolver;