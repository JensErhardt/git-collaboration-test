const express = require('express');
const router  = express.Router();
const Garxoza=require('../views/student3');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/student3', function (req, res, next) {
  res.render('student3');
})
router.get('/student-one', (req, res, next) => {
  res.render('student-one');
})

module.exports = router;
