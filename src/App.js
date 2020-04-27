import React from 'react';
import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Main_page/Header/Header';
import Main from './components/Main_page/Main/Main';
import Info from './components/Main_page/Info/Info';
import Footer from './components/Main_page/Footer/Footer';

const App = ()=> {
  return (
    <React.Fragment>
      <BrowserRouter>
    <Header/>
    <Route path='/about' render={()=><About/>}/>
    <Route path='/home' render={()=><Main/>}/>
    <Route path='/home' render={()=><Info/>}/>
    
    <Footer/>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
