const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    author(id: ID!): Author!
    allAuthors: [Author!]!
    booksByAuthorId(authorId: ID!): [Book!]
    allBooks: [Book!]
    booksByPublisherId(publisherId: ID!): [Book!]
    publisher(id: ID!): Publisher!
  }

  type Mutation {
    addBook(input: AddBookInput!): Book!
    addAuthor(input: AddAuthorInput!): Author!
  }

  input AddBookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    authorId: ID!
    publisherId: ID!
  }

  input AddAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    authorId: ID!
    publisherId: ID!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID
    books: [Book!]!
  }

`
