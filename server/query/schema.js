const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type User{
        id:ID
        username: String!
        email: String!
        password: String!
        joinDate: String!
        dummy: String
    }

    type Query{
        getCurrentUser:User
    }
    

    type Mutation{
        signupUser(username: String!, email: String!, password: String!):User
    }

`;