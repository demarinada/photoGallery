var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user_name', function(req, res, next) {
  res.render('users', {
    title: 'Express',
  user_name: req.params.user_name})
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
