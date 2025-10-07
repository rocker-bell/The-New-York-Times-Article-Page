import React from 'react';

import {Routes, Route} from "react-router-dom";

import Front_page from "./Components/Front-page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Front_page/>} />
    </Routes>
  );
}

export default App;
