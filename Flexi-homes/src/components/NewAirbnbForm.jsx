import { useState } from 'react';

function NewAirbnbForm({ onAddAirbnb }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/airbnbs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, price: Number(formData.price) })
    })
      .then((res) => res.json())
      .then(onAddAirbnb);
    setFormData({ name: '', location: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Airbnb</button>
    </form>
  );
}

export default NewAirbnbForm;
