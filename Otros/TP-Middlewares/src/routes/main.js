const router = require('express').Router();

const { index, admin } = require('../controllers/mainController');
const adminAccess = require('../middlewares/adminAccess');

router
    .get('/', index)
    .get('/admin', adminAccess, admin)

module.exports = router;