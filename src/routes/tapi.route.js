const express = require('express');
const router = express.Router();

const tapiController = require('../controllers/tapi.controller');

router.get('/tapi', tapiController.findTapiController);

router.get('/tapi/:id', tapiController.findTapiByIdController);

router.post('/create', tapiController.createTapiController);

router.put('/update/:id', tapiController.updateTapiController);

router.delete('/delete/:id', tapiController.deleteTapiController);

module.exports = router;
