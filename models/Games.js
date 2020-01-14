const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  platforms: [{ id: Number, name: String }],
  img_url: {
    type: String,
  },
});

const Games = mongoose.model('Games', gamesSchema);

module.exports = Games;
