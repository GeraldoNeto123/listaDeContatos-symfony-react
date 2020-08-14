import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes'
import Header from './components/header';

import './styles.css';

const App = () =>(
  <Provider store={store}>
    <div className="App">
      <Header />
      <Routes />
    </div>
  </Provider>
  
);

export default App;
