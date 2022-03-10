import "./App.css";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import React from "react";
import { FlashcardParent } from "./application/FlashcardParent";

function App() {


  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<FlashcardParent />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
