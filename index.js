const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session")
require('./models/users')

mongoose.connect("mongodb://localhost:27017/myconnection")

app = express();
app.use(
  cookieSession ({
    maxAge : 30*24*3600,
    keys : ['abdef']
  })
)


app.use(passport.initialize());
app.use(passport.session());  

require('./routes/authRoutes');
require('./services/passport');
 


 

let port = process.env.PORT || 5000;


app.listen(port);
