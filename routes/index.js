const express = require('express');
const router = express.Router();
const userRouter = require('./users');

/* GET home page. */
router.get('/v1', async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Api is healthy'
  });
});

router.use('/v1', userRouter);

module.exports = router;
