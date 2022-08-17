import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
 import {BrowserRouter} from 'react-router-dom'
const client = new ApolloClient({
  uri : 'http://localhost:4000/',
  cache: new InMemoryCache(),
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter> 
 <ApolloProvider client={client}>

 
    <App />
    </ApolloProvider>
    </BrowserRouter>
 
);
