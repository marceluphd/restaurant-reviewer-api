var User = require('../api/user/userModel');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  console.log('exports.signin ', req.user._id);

  var token = signToken(req.user._id);
  res.json({
    token: token,
    user: {
      username: req.user.username,
      email: req.user.email
    }
  });
};
