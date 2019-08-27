import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4444/graphql'
})

const client = new ApolloClient({
    cache,
    link
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);

