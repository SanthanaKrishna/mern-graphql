import { gql } from 'apollo-boost';

/**User Queries */

export const GET_CURRENT_USER = gql`
    query{
        getCurrentUser{
            _id
            username
            email
        }
    }
`;


/** User Mutation */

export const SIGNUP_USER = gql`
    mutation($username:String!, $email:String!, $password:String!){
        signUpUser(username:$username, email:$email, password:$password){
            username
            email
            password
        }
    }
`;
// export const SIGNIN_USER = gql`
//     mutation($username:String!, password:String!){
//         signInUser(username: $username, password:$password){
//             token
//             username
//             password
//         }
//     }
// `