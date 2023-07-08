const { Router } = require('express');
const controller = require('../controllers/house')
const router = Router();
router.get('/', controller.getHouse)
router.get('/:id', controller.getHouseById)
router.post('/', controller.addHouse)
router.put('/:id', controller.updateHouse)
router.delete('/:id', controller.deleteHouse)

module.exports = router;