const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const tapiController = require('../controllers/tapi.controller');
const { validId, validObjectBody } = require('../middlewares/tapioca.middleware');

router.get('/tapi', tapiController.findTapiController);

router.get('/tapi/:id', validId, tapiController.findTapiByIdController);

router.post('/create', validObjectBody, tapiController.createTapiController);

router.put('/update/:id', validId, validObjectBody, tapiController.updateTapiController);

router.delete('/delete/:id', validId, tapiController.deleteTapiController);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
