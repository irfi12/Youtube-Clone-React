import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Header from './Components/Header';
import Body from './Components/Body.Jsx';
import {Provider} from 'react-redux'
import store from '../src/utils/store'


const App_Layout = () => {
  return (
    <Provider store={store}>
 
    <div >
      <Header />
      <Body />
  
    </div>
    </Provider>
  );
};

export default App_Layout;
