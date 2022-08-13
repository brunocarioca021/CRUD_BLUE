const express = require('express');
const cors = require('cors');
const route = require('./src/routes/tapi.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
  
app.get('/', function (req, res) {
  res.send('Tapiocaria Abacate');
});

app.use('/tapiocas', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
