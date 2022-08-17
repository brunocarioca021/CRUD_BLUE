const tapiService = require('../services/tapi.service');

const findTapiController = async (req, res) => {
  res.send(await tapiService.findTapiService());
};

const findTapiByIdController = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'Id não informado' });
  }

  const selectTapi = tapiService.findTapiByIdService(req.params.id);

  if (!selectTapi) {
    return res.status(400).send({ message: 'Tapioca não encontrado' });
  }

  res.send(selectTapi);
};

const createTapiController = (req, res) => {
  if (!req.body.sabor || !req.body.descricao || !req.body.preco) {
    return res
      .status(400)
      .send({ message: 'Voc~e não preencheu todos os dados' });
  }
  res.send(tapiService.createTapiService(req.body));
};

const updateTapiController = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Tapioca não encontrada' });
  }

  if (!req.body.sabor || !req.body.descricao || !req.body.preco) {
    return res
      .status(400)
      .send({ message: 'Você não preencheu todos os dados' });
  }
  res.send(tapiService.updateTapiService(+req.params.id, req.body));
};

const deleteTapiController = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Id invalido, tente novamente' });
  }
  const tapioca = tapiService.deleteTapiService(+req.params.id);
  if (!tapioca) {
    return res.status(400).send({ message: 'Tapioca não encontrada' });
  }
  res.send({ message: `Tapioca ${tapioca.sabor} deletada com sucesso` });
};

module.exports = {
  findTapiController,
  findTapiByIdController,
  createTapiController,
  updateTapiController,
  deleteTapiController,
};
