import React from "react";
import { Routes, Route } from "react-router-dom";
import LevelSelectorPage from "./pages/LevelSelectorPage"; // Import your page component
import './App.css'; // I forgot to import this and I was like what is going on?


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/levels" element={<LevelSelectorPage />} />
        {/* Other team members will add their routes here */}
      </Routes>
    </div>
  );
}

export default App;
