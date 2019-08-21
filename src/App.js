import React from 'react';
import './App.css';
import Photo from './Photo.js'
import Title from './Title.js';
import Wrapper from './Wrapper';
function App() {
  return (
    
      <Wrapper>

      <Photo src="/profile.jpg" />

      <Title style={{color:"red"}}>My Name here</Title>

      <Title small>My job here</Title>
      
      </Wrapper>
    
  );
}

export default App;
