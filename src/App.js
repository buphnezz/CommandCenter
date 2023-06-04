import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NovelDirectory from './components/NovelDirectory';
import CharacterDirectory from './components/CharacterDirectory';
import ChapterDirectory from './components/ChapterDirectory';
import WorldAtlasDirectory from './components/WorldAtlasDirectory';
import AddNovel from './components/AddNovel';
import AddCharacter from './components/AddCharacter';
import AddChapter from './components/AddChapter';
import './App.css';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error fetching data', error));
  }, []);

  return (
    <div>
        <AddNovel />
        <AddCharacter />
        <AddChapter />
      <Router>
        <Routes>
          <Route path="/" element={< Dashboard/>} />
          <Route path="/characters" element={<CharacterDirectory />} />
          <Route path="/novel" element={<NovelDirectory />} />
          <Route path="/chapters" element={<ChapterDirectory />} />
          <Route path="/world-atlas" element={<WorldAtlasDirectory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
