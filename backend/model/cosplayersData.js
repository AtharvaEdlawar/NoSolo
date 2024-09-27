const mongoose = require('mongoose');

const cosplayerSchema = new mongoose.Schema({
  fullname: { type: String, required: true , unique:true},
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cosplayCharacter: { type: String, required: true },
  hasCosplayedBefore: { type: String, required: true },
  favouriteAnimeCharacter: { type: String, required: true },
  cosplayImage: { type: String }, // Path to the uploaded image
});

const Cosplayer = mongoose.model('Cosplayer', cosplayerSchema);
module.exports = Cosplayer;