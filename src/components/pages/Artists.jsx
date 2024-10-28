import React, { useState } from "react";
import axios from "axios";

export default function Artist() {
  const [artistData, setArtistData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bandName: "",
    noOfBandMembers: "",
    genre: "",
    duration: "",
    requirement: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistData({ ...artistData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Directly send the artistData as a JSON object hahahaha
    axios.post(`https://artist-registration-qxja.vercel.app/api/Artistsubmit`, artistData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })
      .then((response) => {
        setIsSubmitted(true);
        setError('');
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          // Set custom error message for duplicate data
          setError('A Artist with this email or phone number already exists.');
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
          <h2>{isSubmitted ? "Your Artist registration form has been submitted!" : "Artist Registrations"}</h2>

          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={artistData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={artistData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={artistData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Band Name/ Your Stage Name</label>
            <input
              type="text"
              name="bandName"
              value={artistData.bandName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Total no of Band members (respond with 1 if you are alone)
            </label>
            <input
              type="text"
              name="noOfBandMembers"
              value={artistData.noOfBandMembers}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Genre of Performance</label>
            <input
              type="text"
              name="genre"
              value={artistData.genre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Duration of Performance</label>
            <input
              type="text"
              name="duration"
              value={artistData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Requirements for the Performance from our side</label>
            <input
              type="text"
              name="requirement"
              value={artistData.requirement}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}