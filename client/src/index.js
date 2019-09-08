import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './reducers/index';
import rootWatchers from './saga';

// import { ApolloClient } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: 'http://localhost:4000/graphql',
//     headers: {
//         "Content-Type": "application/graphql"
//     },
//     fetchOptions: {
//         mode: 'no-cors',
//     }
// })
// const client = new ApolloClient({
//     cache,
//     link
// })
function configureStore(preloadedState = {}) {
    const store = createStore(
        rootReducers,
        preloadedState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootWatchers);
    return store;
}
const sagaMiddleware = createSagaMiddleware();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

