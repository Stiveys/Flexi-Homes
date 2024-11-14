import { useEffect, useState } from 'react';

function Home() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/listings')
      .then(response => response.json())
      .then(data => setHouses(data));
  }, []);

  return (
    <div>
      <h1>House Listings</h1>
      <div className="card-container">
        {houses.map((house) => (
          <div key={house.id} className="card">
            <h2>{house.title}</h2>
            <p>Location: {house.location}</p>
            <p>Price per Night: ${house.price_per_night}</p>
            <button onClick={() => alert(house.description)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

