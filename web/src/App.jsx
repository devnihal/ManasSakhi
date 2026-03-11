import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Breathing from './screens/Breathing';
import Settings from './screens/Settings';

// Global context for mood state
export const AppContext = createContext();

function App() {
  const [currentMood, setCurrentMood] = useState('calm'); // 'calm' or 'stressed'

  const toggleMood = () => {
    setCurrentMood((prev) => (prev === 'calm' ? 'stressed' : 'calm'));
  };

  return (
    <AppContext.Provider value={{ currentMood, setCurrentMood, toggleMood }}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/breathing" element={<Breathing />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
