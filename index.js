var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(middleware.addHeaders);
app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/:latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/hobbies/:name', mainCtrl.getHobbyName)
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', mainCtrl.getSecrets);
app.get('/secrets/:username/:pin/:darkest', mainCtrl.getSecretsDark);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
// app.put('/skillz', mainCtrl.changeSkillz);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);
app.post('/skillz', middleware.generateId, mainCtrl.addSkillz)

var port = 3000
app.listen(port, function(){
  console.log('listening to port 3000', port);
});
