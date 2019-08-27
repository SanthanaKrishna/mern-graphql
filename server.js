const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require('./server/query/schema');
const { resolvers } = require('./server/query/resolver');
const User = require('./server/models/User');
// import 1z { typeDefs } from './server/query/schema';
// import { resolvers } from './server/query/resolver';

const PORT = process.env.PORT || 4444;
require('dotenv').config({ path: './config.env' })

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.error(err))


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        User
    }
})

const app = express();
const path = '/graphql'
const corsOperations = {
    origin: "https://localhost:3000",
    credentials: true
}
app.use(cors(corsOperations));

server.applyMiddleware({ app, path });
//create graphiQL application
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// app.use('/graphql',
//     bodyParser.json(),
//     graphqlExpress(() => (
//         {
//             schema,
//             context: {
//                 User
//             }
//         }
//     ))
// );

app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`)
})

