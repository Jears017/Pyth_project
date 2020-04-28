import React from 'react';
import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Main_page/Header/Header';
import Main from './components/Main_page/Main/Main';
import Info from './components/Main_page/Info/Info';
import Footer from './components/Main_page/Footer/Footer';
import Numeric from './components/themes/numeric/Numeric';
import DataTypes from './components/themes/data_types/DataTypes';
import Installation from './components/themes/instalation/Installation';
import FirstProgram from './components/themes/firstProgram/FirstProgram';
import Math from './components/themes/arithOperations/Math';
import Assignment from './components/themes/assignment/Assignment';
import LogicalOper from './components/themes/logiacalOper/LogicalOper';
import Priority from './components/themes/priority/Priority';
import Lists from './components/themes/lists/Lists';
import Conditional from './components/themes/conditionalStat/Conditional';



const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path='/about' render={() => <About />} />
        <Route path='/home' render={() => <Main />} />
         <Route path='/home' render={() => <Info />} />
        <Route path='/introduction' render={() => <Main/>}/>
        <Route path='/numeric' render={() => <Numeric/>} />
        <Route path='/datatypes' render={() => <DataTypes/>} />
        <Route path='/installation' render={() => <Installation/>} />
        <Route path='/firstProgram' render={() => <FirstProgram/>} />
        <Route path='/arithOperations' render={() =>   <Math/>} />
        <Route path='/assignment' render={() =>   <Assignment/>} />
        <Route path='/logicalOper' render={() =>   <LogicalOper/>} />
        <Route path='/priority' render={() =>   <Priority/>} />
        <Route path='/lists' render={() =>   <Lists/>} />
        <Route path='/conditional' render={() =>   <Conditional/>} />


        
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
