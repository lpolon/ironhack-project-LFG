const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    perfilPhoto: String,
    email: String,
    contactChannels: [String],
    gameSchedules: {
      type: String,
      enum: ['morning', 'evening', 'afternoon', 'ALLNIGHT'],
    },
    // TODO: testar
    // https://www.youtube.com/watch?v=9JZJsChpwKs&list=WL&index=29&t=0s
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    games: [{ type: Schema.Types.ObjectId, ref: 'Games' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
