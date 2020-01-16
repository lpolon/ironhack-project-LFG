const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new mongoose.Schema({
  // TODO: remove IDs
  id: Number,
  name: String,
  platforms: [{ id: Number, name: String }],
  img_url: {
    type: String,
  },
});

// id jogo
// id jogador
// qualquer anotação
// gamePrefs

const Games = mongoose.model('Games', gamesSchema);

module.exports = Games;