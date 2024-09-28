import React, { useState } from 'react';
import axios from 'axios';

export default function Cosplayers() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    cosplayCharacter: '',
    hasCosplayedBefore: '',
    favouriteAnimeCharacter: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // To track successful submission
  const [error, setError] = useState('');  // To track errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/submit', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setIsSubmitted(true);
        setError('');  // Clear any previous error
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          // Set custom error message for duplicate data
          setError('A cosplayer with this email or phone number already exists.');
        } else {
          console.error('Error submitting the form:', error);
          setError('An error occurred while submitting the form.');
        }
      });
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="cosplay-form">
          <h2>{isSubmitted ? "Your registration form has been submitted!" : "Cosplay Registrations"}</h2>

          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

            <>
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

              <button type="submit" className="submit-button">Submit</button>
            </>
        </form>
      </div>
    </>
  );
}