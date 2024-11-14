// src/components/HouseDetails.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setHouse(data))
      .catch((error) => console.error("Error fetching house details:", error));
  }, [id]);

  if (!house) return <p>Loading...</p>;

  return (
    <div>
      <h2>{house.title}</h2>
      <p>{house.location}</p>
      <p>Price per night: ${house.price_per_night}</p>
      <p>{house.description}</p>
      {house.images && house.images.map((img, index) => (
        <img key={index} src={img} alt={house.title} style={{ width: "200px" }} />
      ))}
    </div>
  );
};

export default HouseDetails;
