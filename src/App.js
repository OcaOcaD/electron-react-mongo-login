import React from 'react';
import './App.css';
import Login from './Components/Login/Login.js'
import Title from './Components/Title/Title.js'

function App() {
  return (
    <div className="App">
      <Title text="TRADING BOT" />
      <div className="formContainer">
        <Login />
        {/* <SignUp /> */}
      </div>
    </div>
  );
}

export default App;
