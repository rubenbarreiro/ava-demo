var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/info', (req, res) => {
  if (!req.body.confirmation) {
    return res.status(400).json({ error: 'confirmation is required' });
  }


  res.status(200).json({
    data: {
      name: 'John Doe'
    }
  });
});

module.exports = router;
