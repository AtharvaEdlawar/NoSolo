const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true ,unique:true},
  phone: { type: String, required: true ,unique:true},
  bandName: { type: String, required: true },
  sizeoftheband: { type: Number, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
  requirement: { type: String }
});

const ArtistModel = mongoose.model('Artist', ArtistSchema);

module.exports = ArtistModel;