const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamePrefsSchema = new mongoose.Schema(
  {
    gameId: { type: Schema.Types.ObjectId, ref: 'Games' },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    moreInfo: String,
    schedule: {
      type: String,
      // enum: ['morning', 'evening', 'afternoon', 'ALLNIGHT LONG'],
    },
    commitment: {
      type: String,
      // enum: ['for fun', 'competitive'],
      default: 'for fun',
    },
  },
  {
    timestamps: true,
  }
);

const GamePrefs = mongoose.model('GamePrefs', gamePrefsSchema);

module.exports = GamePrefs;
