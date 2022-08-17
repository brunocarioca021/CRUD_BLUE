const tapiService = require('../services/tapi.service');

const findTapiController = async (req, res) => {
  res.send(await tapiService.findTapiService());
};

const findTapiByIdController = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Id não informado' });
  }

  const selectTapi = await tapiService.findTapiByIdService(req.params.id);

  if (!selectTapi) {
    return res.status(400).send({ message: 'Tapioca não encontrado' });
  }

  res.send(selectTapi);
};

const createTapiController = async (req, res) => {
  if (!req.body.sabor || !req.body.descricao || !req.body.preco) {
    return res
      .status(400)
      .send({ message: 'Voc~e não preencheu todos os dados' });
  }
  res.send(await tapiService.createTapiService(req.body));
};

const updateTapiController = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Tapioca não encontrada' });
  }

  if (!req.body.sabor || !req.body.descricao || !req.body.preco) {
    return res
      .status(400)
      .send({ message: 'Você não preencheu todos os dados' });
  }
  res.send(await tapiService.updateTapiService(req.params.id, req.body));
};

const deleteTapiController = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Id invalido, tente novamente' });
  }
  const tapioca = await tapiService.deleteTapiService(req.params.id);
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
