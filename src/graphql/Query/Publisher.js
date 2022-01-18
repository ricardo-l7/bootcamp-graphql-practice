const Publisher = require('../../models/Publisher')

const publisher = async (obj, {id}, context) => {
    try {
        const publisherById = await Publisher.query().findOne('id', id)
        return publisherById
    } catch (err) {
        console.log(err)
        throw new Error('failed to get publisher')
    }
}

const resolver = {
    Query: {
        publisher
    },
}

module.exports = resolver;