const express = require('express');
const router = express.Router();
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.post('/login', (req, res, next) => {
  login(req.body).then(data => {
    if (data.username) {
      req.session.username = data.username;
      req.session.realname = data.realname;
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel());
    }
  });
});

router.get('/logout', (req, res, next) => {
  if (req.session.username) {
    req.session.username = null;
    req.session.realname = null;
    res.json(new SuccessModel());
  } else {
    res.json(new ErrorModel());
  }
});

module.exports = router;
