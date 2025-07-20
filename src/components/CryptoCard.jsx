import './CryptoCard.css'

function CryptoCard({name, image, symbol, price}){
    return(
        <div className="crypto-card">
            <img src={image} alt={name} />
            <h2>{name} ({symbol.toUpperCase()})</h2>
            <p>💸 ${price}</p>
        </div>
    )
}
export default CryptoCard