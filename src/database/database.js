const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas Conectado'))
    .catch((err) => console.log(`Erro ao conectar com MongoDB, erro: ${err}`));
};

module.exports = connectToDatabase;
