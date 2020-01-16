require('dotenv').config();
const mongoose = require('mongoose');
const Games = require('../Games');
const gamesSeed = require('./gamesSeed');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Games.collection.drop(); // redo DB

Games.create(gamesSeed)
  .then(() => {
    console.log(`created ${gamesSeed.length} games entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));