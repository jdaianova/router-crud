import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import EditPost from './components/EditPost/EditPost';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import axios from 'axios';
//import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/CreatePost' element={<CreatePost />} />
          <Route path='/EditPost' element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
