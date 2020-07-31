import React from 'react';
import Routes from './routes'
import Header from './components/header';
import Main from './pages/main';
import './styles.css';

const App = () =>(
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Lista de Contatos</h1>
//     </div>
//   );
// }

export default App;
