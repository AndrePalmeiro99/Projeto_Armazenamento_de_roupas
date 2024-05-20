const express = require('express')
const router = express.Router()

const roupaController = require('../controller/roupaController')

router.get('/',roupaController.getRoupas)

router.post('/add',roupaController.addRoupas)

router.put('/:id',roupaController.updateRoupas)

router.delete('/:id',roupaController.deleteRoupas)

module.exports = router