const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogController')
const dateController = require('../controllers/dateController')

router.get('/api/dogs', dogController.index)
router.post('/api/dogs', dogController.create)
router.get('/api/dogs/:dogId', dogController.show)
router.patch('/api/dogs/:dogId', dogController.update)
router.delete('/api/dogs/:dogId', dogController.delete)

router.get('/api/dogs/:dogId/dates', dateController.index)
router.get('/api/date/:dateId', dateController.show)
router.delete('/api/date/:dateId', dateController.delete)
router.patch('/api/dogs/:dogId/date/:dateId', dateController.update)
router.post('/api/dogs/:dogId/dates', dateController.create)

module.exports = router
