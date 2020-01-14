const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const socialLinksSchema = new mongoose.Schema({
  links: {
    image_path: String,
    social_link_name: String,
  },
});

const SocialLinks = mongoose.model('SocialLinks', socialLinksSchema);

module.exports = SocialLinks;