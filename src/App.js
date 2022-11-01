// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Mainbody from './components/Mainbody'
import { UserProvider } from './context.js'

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Nav/>
      <Mainbody/>
      </UserProvider>
    </div>
  );
}

export default App;
