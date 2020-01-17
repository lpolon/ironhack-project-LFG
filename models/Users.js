const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: String,
    // TODO: file upload for perfil photo?
    perfilPhoto: String,
    email: String,
    contactChannels: String,
    gameSchedules: {
      type: String,
      enum: ['morning', 'evening', 'afternoon', 'ALLNIGHT'],
    },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    games: [{ type: Schema.Types.ObjectId, ref: 'Games' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
