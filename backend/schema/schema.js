// schema/schema.js
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    listMovies: [Movie]
  }
  type Mutation {
    addMovie(name: String!, genre: String!, year: String!): Movie
  }
  type Movie {
    id: ID!
    name: String!
    genre: String!
    year: String!
   
  }
`);

module.exports = schema;
