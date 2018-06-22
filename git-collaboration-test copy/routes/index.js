const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/student-one', (req, res, next) => {
  res.render('student-one');
})

module.exports = router;
