const express = require('express');
const router = express.Router();

const tapiController = require('../controllers/tapi.controller');
const { validId, validObjectBody } = require('../middlewares/tapioca.middleware');

router.get('/tapi', tapiController.findTapiController);

router.get('/tapi/:id', validId, tapiController.findTapiByIdController);

router.post('/create', validObjectBody, tapiController.createTapiController);

router.put('/update/:id', validId, validObjectBody, tapiController.updateTapiController);

router.delete('/delete/:id', validId, tapiController.deleteTapiController);

module.exports = router;
