import React from 'react';
import Header from '../components/Header';
import './App.scss';

const CSS_NAME = 'app'

function App() {
  return (
    <div className={CSS_NAME}>
      <Header />
    </div>
  );
}

export default App;
