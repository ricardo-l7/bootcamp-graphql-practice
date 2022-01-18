const Book = require('../../models/Book')

const allBooks = async () => {
    try {
        const list = await Book.query()
        return list
    } catch (err) {
        console.log(err)
        throw new Error('failed to get books')
    }
        
}
    
const booksByAuthorId = async (obj, {authorId}, context) => {
    try {
        const list = await Book.query().where('authorId', authorId)
        return list
    } catch (err) {
        console.log(err)
        throw new Error('failed to get books for that Author')
    }
        
}
    
const booksByPublisherId = async (obj, {publisherId}, context) => {
    try {
        const list = await Book.query().where('publisherId', publisherId)
        return list
    } catch (err) {
        console.log(err)
        throw new Error('failed to get books for that Publisher')
    }
}
    
const resolver = {
    Query: {
        allBooks,
        booksByAuthorId,
        booksByPublisherId
    }
}
    
module.exports = resolver;