import { useState, useEffect } from 'react';
import AirbnbCard from '../components/AirbnbCard';
import NewAirbnbForm from '../components/NewAirbnbForm';

function Listings() {
  const [airbnbs, setAirbnbs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/airbnbs')
      .then((res) => res.json())
      .then(setAirbnbs);
  }, []);

  const addAirbnb = (newAirbnb) => {
    setAirbnbs([...airbnbs, newAirbnb]);
  };

  return (
    <div>
      <h2>Listings</h2>
      <NewAirbnbForm onAddAirbnb={addAirbnb} />
      <div className="listings">
        {airbnbs.map((airbnb) => (
          <AirbnbCard key={airbnb.id} airbnb={airbnb} />
        ))}
      </div>
    </div>
  );
}

export default Listings;
