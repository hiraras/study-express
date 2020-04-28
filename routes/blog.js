var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blog');

router.get('/list', loginCheck, function(req, res, next) {
  const { keyword = '', isAdmin = false } = req.query;
  let { author = '' } = req.query;
  if (isAdmin) {
    author = req.session.username;
  }
  return getList(author, keyword, isAdmin).then(result => {
    res.json(new SuccessModel(result));
  }).catch(err => {
    res.json(new ErrorModel(err));
  });
});

router.get('/detail', loginCheck, function(req, res, next) {
  getDetail(req.query.id).then(result => {
    res.json(new SuccessModel(result));
  }).catch(err => {
    res.json(new ErrorModel(err));
  });
});

router.post('/new', loginCheck, function(req, res, next) {
  req.body.author = req.session.username;
  newBlog(req.body).then(result => {
    res.json(new SuccessModel(result));
  }).catch(err => {
    res.json(new ErrorModel(err));
  });
});

router.post('/update', loginCheck, function(req, res, next) {
  req.body.author = req.session.username;
  updateBlog(req.body).then(result => {
    res.json(new SuccessModel(result));
  }).catch(err => {
    res.json(new ErrorModel(err));
  });
});

router.delete('/del/:id', loginCheck, function(req, res, next) {
  const id = req.params.id;
  const author = req.session.username;
  deleteBlog(id, author).then(result => {
    res.json(new SuccessModel(result));
  }).catch(err => {
    res.json(new ErrorModel(err));
  });
});

module.exports = router;
