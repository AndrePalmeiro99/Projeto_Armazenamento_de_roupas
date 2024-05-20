const express = require('express')
const router = express.Router()

const lojaController = require('../controller/lojaController')

router.get('/',lojaController.getLojas)

router.post('/add',lojaController.addLojas)

// router.put('/:id',lojaController.updateRoupas)

router.delete('/delete',lojaController.removeLojas)

module.exports = router