import React, { useState } from 'react';
import axios from 'axios';
export default function Cosplayers() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    cosplayCharacter: '',
    hasCosplayedBefore: '',
    favouriteAnimeCharacter: '',
    paymentCosplayers: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // To track successful submission
  const [error, setError] = useState('');  // To track errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/cosplayers/api/submit', formData)
    .then(response => {
      setIsSubmitted(true);
      setError('');
    })
    .catch(error => {
      console.error('Error details:', error.response || error);  // Better error logging
      if (error.response && error.response.status === 409) {
        setError('A cosplayer with this email or phone number already exists.');
      } else {
        setError('An error occurred while submitting the form.');
      }
    });
};

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="cosplay-form">
          <h2>Cosplay Registrations</h2>

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
              <div className='form-group'>
                <label> Kindly Pay 200Rs as Cosplay registration fee on the QR given below</label>
                <img className='qrImg' src="/images/qrCode.png" alt="qrCode image"/>
              </div>

              <div className='form-group'>
              <label>Name of the Account through which payment was made</label>
              <input type="text"
                name="paymentCosplayers"
                value={formData.paymentCosplayers}
                onChange={handleChange}
                required
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitted}>
                {isSubmitted ? "Your registration form has been submitted!" : "Submit"}
              </button>
            </>
        </form>
      </div>

      <div className="cosplay-container">
        {/* <h2>Cosplay Fees = 200/- tell us the number and name you're going to pay with.</h2> */}
        <h2>Your 200/- comprises of:</h2>
        <ol>
          <li>Cash prize pool</li>
          <li>Entry Fee</li>
          <li>Red Carpet and Massive Backstage area</li>
          <li>Professional Photo and Videography</li>
          <li>Personalised Gift Hampers for everyone, Exclusive Merches, and discount coupons</li>
          <li>Separate Changing Rooms and washrooms for males and females</li>
          <li>Cosplay secrecy and safety is our first priority</li>
          <li>Cosplay Doctors and volunteers for cosplayers</li>
          <li>Refreshments are covered</li>
        </ol>
      </div>
    </>
  );
}
