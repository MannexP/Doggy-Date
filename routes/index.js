const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dogController')
// const dateController = require('../controllers/dateController')

router.get('/api/dog', dogController.index)
router.post('/api/dog/', dogController.create)
router.get('/api/dog/:dogId', dogController.show)
router.patch('/api/dog/:dogId', dogController.update)
router.delete('/api/dog/:dogId', dogController.delete)

// router.get('/api/dog/:dogId/date', dateController.index)
// router.get('/api/date/:dateId', dateController.show)
// router.delete('/api/date/:dateId', dateController.delete)
// router.patch('/api/date/:dateId', dateController.update)
// router.post('/api/dog/:dogId/date', dateController.create)

module.exports = router
