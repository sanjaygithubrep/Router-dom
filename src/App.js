import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import Protected from './component/Protected'
import Login from './component/Login'
import About from './component/About'
import Contact from './component/Contact'
import Company from './component/Company'
import Channel from './component/Channel'
import Other from './component/Other'
import Navbar from './component/Navbar'
import User from './component/User'
import Filter from './component/Filter'

import Page404 from './component/Page404'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<Protected Component={About} />} />
       
        <Route path="/filter" element={<Filter />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/contact/" element={<Contact />}>
        <Route path="company" element={<Company />} />
        <Route path="channel" element={<Channel />} />
        <Route path="other" element={<Other />} />
        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
