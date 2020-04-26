var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel');
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blog');

router.get('/list', function(req, res, next) {
  const { author = '', keyword = '' } = req.query;
  return getList(author, keyword).then(list => {
    res.json(new SuccessModel(list));
  });
});

router.get('/detail', function(req, res, next) {
  res.json({
    errno: 0,
    data: 'ok'
  });
});

module.exports = router;
