var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/prueba', function(req, res, next) {
  res.send({
    name: "Eva"
  });
});

module.exports = router;
