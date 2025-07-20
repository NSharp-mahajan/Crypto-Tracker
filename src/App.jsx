import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CryptoTracker from './pages/CryptoTracker';
import Tracker from './pages/Tracker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  );
}

export default App;
