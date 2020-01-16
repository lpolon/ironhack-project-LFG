require('dotenv').config();
const mongoose = require('mongoose');
const SocialLinks = require('../SocialLinks');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SocialLinks.collection.drop(); // redo DB
// TODO: base dos links para popular formulários para preencher links
const seed = [
  {
    links: {
      image_path: '../public/platform_icons/discord.png',
      social_link_name: 'Discord',
    },
  },
  {
    links: {
      image_path: '../public/platform_icons/steam.jpg',
      social_link_name: 'Steam',
    },
  },
  {
    links: {
      image_path: '../public/platform_icons/switch.jpg',
      name: 'Nintendo Switch',
    },
  },
];

SocialLinks.create(seed)
  .then(() => {
    console.log(`created ${seed.length} social link entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
