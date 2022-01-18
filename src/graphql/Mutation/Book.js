const Book = require('../../models/Book')

const addBook = async (obj, {input: {title: title, language: language, authorId: authorId, publisherId: publisherId}}, context) => {
    try {
        const addNewBook = await Book.query().insert({
            title: title,
            language: language,
            authorId: authorId,
            publisherId: publisherId
        })
        return addNewBook
    } catch (err) {
        console.log(err)
        throw new Error('failed to add Book')
    }
    
}

const resolver = {
    Mutation: {
        addBook
    }
}

module.exports = resolver;