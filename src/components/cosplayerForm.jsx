import React, { useState } from 'react';
import axios from 'axios';


export default function CosplayForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    cosplayCharacter: '',
    hasCosplayedBefore: '',
    favouriteAnimeCharacter: '',
    cosplayImage: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('fullname', formData.fullname);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('cosplayCharacter', formData.cosplayCharacter);
    data.append('hasCosplayedBefore', formData.hasCosplayedBefore);
    data.append('favouriteAnimeCharacter', formData.favouriteAnimeCharacter);
    data.append('cosplayImage', formData.cosplayImage);

   
    axios.post('/api/submit', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        alert(response.data.message); // Show success message
      })
      .catch(error => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="cosplay-form">
        <h2>Cosplay Registrations</h2>

        <div className="form-group">
          <label>Full Name:</label>
          <input 
            type="text" 
            name="fullname"
            value={formData.fullname} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            name="phone"  
            value={formData.phone}
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Character You Are Going to Cosplay:</label>
          <input 
            type="text" 
            name="cosplayCharacter"
            value={formData.cosplayCharacter}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Have You Ever Cosplayed in a Solo Event?</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                name="hasCosplayedBefore" 
                value="yes"
                checked={formData.hasCosplayedBefore === 'yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="hasCosplayedBefore" 
                value="no" 
                checked={formData.hasCosplayedBefore === 'no'}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Favourite Anime Character:</label>
          <input 
            type="text" 
            name="favouriteAnimeCharacter" 
            value={formData.favouriteAnimeCharacter}
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Upload a Picture of You in a Cosplay Costume:</label>
          <input 
            type="file" 
            name="cosplayImage" 
            accept="image/*"
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
}
