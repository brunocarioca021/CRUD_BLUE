const tapiService = require('../services/tapi.service');

const findTapiController = (req, res) => {
  res.send(tapiService.findTapiService());
};

const findTapiByIdController = (req, res) => {
  res.send(tapiService.findTapiByIdService(req.params.id));
};

const createTapiController = (req, res) => {
  res.send(tapiService.createTapiService(req.body));
};

const updateTapiController = (req, res) => {
  res.send(tapiService.updateTapiService(+req.params.id, req.body));
};

const deleteTapiController = (req, res) => {
  res.send(tapiService.deleteTapiService(+req.params.id));
};

module.exports = {
  findTapiController,
  findTapiByIdController,
  createTapiController,
  updateTapiController,
  deleteTapiController
};
  
