const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/tapiocas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado'))
    .catch((err) => console.log(`Erro ao conectar com MongoDB, erro: ${err}`));
};

module.exports = connectToDatabase;
