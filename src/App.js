import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Login from './components/Login';
import AnimeDetail from './components/AnimeDetail';
import AnimeWatch from './components/AnimeWatch';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard'
import Add from './components/Add'
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Anime/:id" element={<AnimeDetail/>}/>
        <Route path="/Watch/:id" element={<AnimeWatch/>}/>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
        <Route path='/add' element={<Protected><Add/></Protected>}></Route>
        <Route path=':id/edit' element={<Protected><Edit/></Protected>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
