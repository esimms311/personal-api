var user = require('../models/user');
var skillz = require('../models/skillz');
var secrets = require('../models/secrets');


module.exports = {
   getName: function(req, res, next){
    res.status(200).json({name: user.name});
  },

   getLocation: function(req, res, next){
    res.status(200).json({location: user.location});
  },

   getOccupations: function(req, res, next){
    if(req.query.order) {
      if (req.query.order === 'asc') {
        user.occupations.sort();
      } else if (req.query.order === 'desc') {
        user.occupations.sort().reverse();
      }
    }
    res.status(200).json({occupations: user.occupations});
  },

   getOccupationsLatest: function(req, res, next){
    res.status(200).json({latestOccupation: user.occupations[user.occupations.length - 1]});
  },

     getHobbies: function(req, res, next){
    res.status(200).json({hobbies: user.hobbies});
  },

   getHobbyType: function(req, res, next){
    var filteredHob = user.hobbies.filter(function(val) {
      return val.type == req.params. type;
    });
    res.status(200).json({ hobbies: filteredHob});
  },

   getHobbyName: function(req, res, next){
    var filteredHob = user.hobbies.filter(function(val){
      return val.name == req.params.name;
    });
    res.status(200).json({hobbies: filteredHob  });
  },

   getFamily: function(req, res, next){
    res.status(200).json({ family: user.family});
  },

   getFamilyGender: function(req, res, next){
    var filteredFam = user.family.filter(function(val){
      return val.gender == req.params.gender;
    });
    res.status(200).json({hobbies:filteredFam});
  },

   getRestaurants: function(req, res, next){
    res.status(200).json({restaurants: user.restaurants});
  },

   getRestaurantsName: function(req, res, next){
    var filteredRest = user.restaurants.filter(function(val){
      return val.name == req.params.gender;
    });
    res.status(200).json({restaurants: filteredRest});
  },


   changeName: function(req, res, next){
    user.name = req.body.name
    res.status(200).json({name: user.name});
  },

   changeLocation: function(req, res, next){
    user.location = req.body.location
    res.status(200).json({location: user.location});
  },

   addOccupation: function(req, res, next) {
    user.occupations.push(req.body.occupations)
    res.status(200).json({occupations: user.occupations});
  },

   addHobby: function(req, res, next) {
    user.hobbies.push(req.body.hobbies)
    res.status(200).json({hobbies:user.hobbies});
  },

   addFamily: function(req, res, next) {
    user.family.push(req.body.family)
    res.status(200).json({family:user.family});
  },

   addRestaurant: function(req, res, next) {
    user.restaurants.push(req.body.family)
    res.status(200).json({restaurants: user.restaurants});
  },

  addSkillz: function(req, res, next) {
    skillz.skills.push(req.body);
    res.status(200).json({skillz: skillz.skills});
  },

  getSkillz: function(req, res, next){
    if(req.query.experience) {
      var filteredSkillz = skillz.skills.filter(function(val){
        return val.experience == req.query.experience;
      });
      return res.status(200).json({skillz: filteredSkillz});
    }
    res.status(200).json({skillz: skillz.skills});
  },

  getSecrets: function(req, res, next){
    res.status(200).json({secrets: secrets});
  },
  getSecretsDark: function(req, res, next){
    var filteredSecret = secrets.secrets.filter(function(val){
      return val.name == req.params.name;
    });
    res.status(200).json({secrets: filteredSecret});
  }

}
