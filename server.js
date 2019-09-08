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
const path = require('path');

const PORT = process.env.PORT || 5000;
require('dotenv').config({ path: './config.env' })

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.error(err))

const app = express();
app.use(cors())
//Init Middleware
//app.use(bodyParser.urlencoded({ extended: false })); 
//using express.json() instead of bodyParser
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Api running'));

//Define Routes
app.use('/api/users', require('./server/routes/api/users'));
app.use('/api/auth', require('./server/routes/api/auth'));
app.use('/api/profile', require('./server/routes/api/profile'));
app.use('/api/posts', require('./server/routes/api/posts'));

/**serve static assests in production */
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {  //__dirname => current directory
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: {
//         User
//     }
// })

// const path = '/graphql';
// const corsOperations = {
//     origin: "https://localhost:3000",
//     credentials: true
// }
// app.use(cors(corsOperations));

// server.applyMiddleware({ app, path });

app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`)
})

//heroku create