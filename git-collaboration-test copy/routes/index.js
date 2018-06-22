const express = require('express');
const router  = express.Router();
const Garxoza=require('../views/student3');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/student3', function (req, res) {
  res.render('student3');
})
module.exports = router;
