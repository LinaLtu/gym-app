import React from 'react';
import './App.scss';
import MainPage from '../components/MainPage'

const CSS_NAME = 'app'

const App = () => {
  return (
    <div className={CSS_NAME}>
      <MainPage />
    </div>
  );
}

export default App;
