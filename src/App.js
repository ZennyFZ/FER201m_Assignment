import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import AnimeDetail from './components/AnimeDetail';
import AnimeWatch from './components/AnimeWatch';
import Login from './components/Login';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Anime/:id" element={<AnimeDetail/>}/>
        <Route path="/Watch/:id" element={<AnimeWatch/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
