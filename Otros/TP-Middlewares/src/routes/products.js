const router = require('express').Router();

const { list, detail } = require('../controllers/productsController');

    /* Products */

router
    .get('/', list)
    .get('/detail', detail)

module.exports = router;