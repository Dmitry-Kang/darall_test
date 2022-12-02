import express = require('express')
const controller = require('../controllers/position')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/category/:id', controller.getByCategoryId)
router.post('/', upload.single('image'), controller.create);
router.patch('/:id', controller.update)
router.delete('/:id',  controller.remove)

module.exports = router