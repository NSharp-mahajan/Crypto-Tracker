import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import CryptoSVG from '../assets/crypto.svg'
import ReactLogo from '../assets/rea_ct.svg'
import ViteLogo from '../assets/vite.svg'
import CoinGeckoLogo from '../assets/coingecko.svg'
import { useEffect, useState } from 'react'

function LandingPage() {
  const navigate = useNavigate()
  const[theme, setTheme] = useState('dark')

  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="landing-wrapper">
      <nav className="navbar">
        <div className="logo">💸 CryptoScope</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li onClick={() => navigate('/tracker')}>Tracker</li>

          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}    
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="landing-main">
        <div className="text-content">
          <h1>Track Crypto Like a Pro</h1>
          <p>Live prices. Clean UI. No distractions. Built with 💙 using React + CoinGecko API.</p>
          <button onClick={() => navigate('/tracker')}>🚀 Get Started</button>
        </div>
        <div className="image-content">
          <img src={CryptoSVG} alt="crypto" />
        </div>
      </div>

      {/* Features */}
      <section className="features" id="features">
        <h2>🔥 Features</h2>
        <ul>
          <li>✅ Real-time crypto price updates</li>
          <li>✅ Smooth UX with responsive design</li>
          <li>✅ Built using modern tech stack</li>
          <li>✅ No login required to use</li>
        </ul>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <h2>About CryptoScope</h2>
        <p>
          CryptoScope isn’t just another crypto tracker — it’s a clean, modern way to explore the world of cryptocurrency,
          built for this generation. No ads, no clutter, just live data delivered with speed and simplicity.
        </p>
        <p>
          This project is proudly crafted using React.js, Vite, and the CoinGecko API, and is designed to scale with future features like portfolios, alerts, and dark mode.
        </p>
        <p>
          Created by <strong>Natansh Mahajan</strong>, a Computer Science student passionate about tech, product design, and solving real problems with code.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <h2>🔧 Built With</h2>
        <div className="stack-logos">
          <img src={ReactLogo} alt="React" />
          <img src={ViteLogo} alt="Vite" />
          <img src={CoinGeckoLogo} alt="CoinGecko API" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CryptoScope • Made with 💙 by Natansh</p>
      </footer>
    </div>
  )
}

export default LandingPage
