var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with some resource');
});
router.get('/cool', function (req, res) {
  res.send('im really cool')
})
module.exports = router;
