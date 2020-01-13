const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    artwork_path: {
      type: String,
    },
    platforms: [String],
  },
  {
    timestamps: true,
  }
);

const Games = mongoose.model('Games', gamesSchema);

module.exports = Games;
