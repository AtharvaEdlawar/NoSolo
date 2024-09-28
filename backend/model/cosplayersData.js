const mongoose = require('mongoose');

const cosplayerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true,unique:true},
  phone: { type: String, required: true,unique:true },
  cosplayCharacter: { type: String, required: true },
  hasCosplayedBefore: { type: String, required: true },
  favouriteAnimeCharacter: { type: String, required: true },
});

const Cosplayer = mongoose.model('Cosplayer', cosplayerSchema);
module.exports = Cosplayer;