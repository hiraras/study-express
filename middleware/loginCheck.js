
const { ErrorModel } = require('../middleware/loginCheck');

module.exports = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.json(new ErrorModel('未登录'));
  }
}