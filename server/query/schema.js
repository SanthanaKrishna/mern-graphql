const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type User{
        _id:ID
        username: String!
        email: String!
        password: String!
    }

    type Query{
        getCurrentUser:User
    }
    

    type Mutation{
        signUpUser(username: String!, email: String!, password: String!):User
    }

`;