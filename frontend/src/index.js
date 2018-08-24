import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import Routes from './routes';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000',
  });
  
  const client = new ApolloClient({
    networkInterface,
  });

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render( App, document.getElementById('root'));
registerServiceWorker();
