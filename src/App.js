import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Info from './components/Info';
import Footer from './components/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';

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
