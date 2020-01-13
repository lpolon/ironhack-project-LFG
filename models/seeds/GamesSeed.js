require('dotenv').config();
const mongoose = require('mongoose');
const Games = require('../Games');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Games.collection.drop(); // redo DB

const seed = [
  {
    name: 'League of Legends',
    artwork_path: '../public/game_artwork/league-of-legends.jpg',
    platforms: ['PC'],
  },
  {
    name: 'Counter Strike: Global Offensive',
    artwork_path: '../public/game_artwork/CS-global-offensive.jpg',
    platforms: ['PC'],
  },
  {
    name: 'Fortnite',
    artwork_path: '../public/game_artwork/fortnite.jpg',
    platforms: [
      'PC',
      'nintendo Switch',
      'PlayStation 4',
      'Xbox One',
      'iOS',
      'Android',
    ],
  },
  {
    name: 'Super Smash Bros. Ultimate',
    artwork_path: '../public/game_artwork/smash-bros-ultimate.jpg',
    platforms: ['nintendo Switch'],
  },
];

Games.create(seed)
  .then(() => {
    console.log(`created ${seed.length} games entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));