const mongoose = require('mongoose');
const Games = require('./Games')
mongoose.connect(process.env.MONGODB_URI);
Games.collection.drop() // redo DB
const seed = [{
  
}];

// Games.create(seed)
//   .then(() => {
//     console.log(`created ${seed.length} games entries`);
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));