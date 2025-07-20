import React, { useEffect, useState } from 'react'
import './Tracker.css'
import { data } from 'react-router-dom'

function Tracker(){
    const [coins,setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then(res => res.json())
        .then(data => {
            setCoins(data)
        })
        .catch(err => console.error(err))
    }, [])

    return (
         <div className="tracker-wrapper">
      <h1 className="tracker-title">📈 Live Crypto Tracker</h1>

      <div className="tracker-controls">
        <input
          type="text"
          placeholder="Search coins..."
          className="tracker-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="tracker-sort">
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rank">Rank</option>
          <option value="percent_change">24h % Change</option>
        </select>
      </div>

      <div className="tracker-coins">
        {
          coins
            .filter(coin =>
              coin.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(coin => (
              <div className="coin-card" key={coin.id}>
                <div className="coin-info">
                  <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                  <p>💲{coin.current_price.toLocaleString()}</p>
                  <p>📈 24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
                <img src={coin.image} alt={coin.name} width="40" />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Tracker