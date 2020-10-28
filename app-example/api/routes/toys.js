var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let items = [];
    res.send(items);
});

module.exports = router;
