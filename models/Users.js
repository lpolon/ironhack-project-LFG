const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    // TODO: file upload for perfil photo?
    perfilPhoto: String,
    // TODO: remove email, gameSchedule.
    email: String,
    contactChannels: [String],
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
