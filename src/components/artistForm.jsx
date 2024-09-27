import React, { useState } from "react";
import axios from "axios";

export default function ArtistForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtistData({ ...artistData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Directly send the artistData as a JSON object
    axios
      .post("/api/Artistsubmit", artistData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert(response.data.message); // Show success message
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="cosplay-form">
          <h2>Artist Registrations</h2>

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