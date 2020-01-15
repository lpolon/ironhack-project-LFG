const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamePrefsSchema = new mongoose.Schema({
  gameId: { type: Schema.Types.ObjectId, ref: 'Games' },
  userId: { type: Schema.Types.ObjectId, ref: 'Users' },
  moreInfo: String,
  schedule: {
    type: String,
    enum: ['morning', 'evening', 'afternoon', 'ALLNIGHT'],
  },
  mode: {
    type: String,
    enum: ['for fun', 'competitivo'],
    default: 'for fun',
  },
});

const GamePrefs = mongoose.model('GamePrefs', gamePrefsSchema);

module.exports = GamePrefs;
