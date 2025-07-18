import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Header from './Components/Header';
import Body from './Components/Body.Jsx';


const App_Layout = () => {
  return (
    <div>
      <Header />
      <Body />
  
    </div>
  );
};

export default App_Layout;
