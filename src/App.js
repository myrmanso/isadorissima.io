import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage'
import Projects from './pages/ProjectsPage';

import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Projects />} path="/project/:projectsId" />
    </Routes>
  );
}

export default App;
