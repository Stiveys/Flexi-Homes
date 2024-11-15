function AirbnbCard({ airbnb }) {
    return (
      <div className="airbnb-card">
        <img src={airbnb.image} alt={airbnb.name} />
        <h2>{airbnb.name}</h2>
        <p>Location: {airbnb.location}</p>
        <p>Price: ${airbnb.price} per night</p>
      </div>
    );
  }
  
  export default AirbnbCard;
  