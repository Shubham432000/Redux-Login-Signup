import Navbar from './component/Navbar';
import Signup from './account/Signup';
import Login from './account/Login';
import Home from './component/Home'
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Form from './component/Form';
import Ticket from './component/Ticket';
//import HomeContainers from './containers/homeContainers';
function App() {


  return (
<>
<Navbar/>

<Routes>

  <Route path='/home' element={<Home/>}/>
  <Route path='/' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/ticket' element={<Ticket/>}/>
</Routes>

</>
  );
}

export default App;
