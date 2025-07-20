import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CryptoTracker from './pages/CryptoTracker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tracker" element={<CryptoTracker />} />
    </Routes>
  );
}

export default App;
