import { useEffect, useState } from 'react';
import CryptoCard from '../components/CryptoCard';
import './CryptoTracker.css';

function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
        );
        const data = await res.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tracker">
      <h1>📊 Live Crypto Prices</h1>
      <div className="crypto-list">
        {cryptoData.map((coin) => (
          <CryptoCard
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
          />
        ))}
      </div>
    </div>
  );
}

export default CryptoTracker;
