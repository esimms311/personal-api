var user = require('../models/user');
var skillz = require('../models/skillz');
module.exports = {

  addHeaders: function(req, res, next){
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },

  generateId: function(req, res, next) {
    req.body.id = skillz.skills.length + 1;
    next();
  },

  verifyUser: function(req, res, next) {
    if (req.params.name === 'test' && req.params.pin === '999') {
      next();
    } else {
      console.log('WrongO');
    }
  }
}
