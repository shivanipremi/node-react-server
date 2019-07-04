const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyPaser = require("body-parser")
const cookieSession = require("cookie-session")
require('./models/users')
require('./models/surveys')


mongoose.connect("mongodb://localhost:27017/myconnection")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:::::'));
db.once('open', function callback () {
  console.log("h===");
});

app = express();
app.use(
  cookieSession ({
    maxAge : 30*24*3600,
    keys : ['abdef']
  })
)

app.use(bodyPaser.json())


app.use(passport.initialize());
app.use(passport.session());  

require('./routes/authRoutes');
require('./routes/billingRoutes');
require('./routes/surveyRoutes');


require('./services/passport');

var cors = require('cors')
app.use(cors())
 
app.use(function(req, res, next) {
  // var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  // var origin = req.headers.origin;
  // if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', '*');
  // }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

let port = process.env.PORT || 5000;


app.listen(port);
