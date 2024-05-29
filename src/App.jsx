import { Routes, Route } from "react-router-dom";
import LevelSelector from "./components/LevelSelector";
import "./pages/LevelSelector.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LevelSelector />} />
        {/* Other team members will add their routes here */}
      </Routes>
    </div>
  );
};

export default App;