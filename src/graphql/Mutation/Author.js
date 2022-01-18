const Author = require('../../models/Author')

const addAuthor = async (obj, {input: {firstName:firnam, lastName: lasnam}}, context) => {
    try {
        const addNewAuthor = await Author.query().insert({
            firstName: firnam,
            lastName: lasnam
        })
        return addNewAuthor
    } catch (err) {
        console.log(err)
        throw new Error('failed to add Author')
    }
    
}

const resolver = {
    Mutation: {
        addAuthor
    }
}

module.exports = resolver;