const passport = require('passport');

app.get("/auth/google", passport.authenticate('google', {scope : ['profile', 'email']}),(req, res) => {
    res.send({ bye: "buddy" });
  });
app.get("/auth/google/callback", passport.authenticate('google'), (req, res)=> {
    res.send({HEY : 'FO'})
});

app.get("/api/current_user", (req, res)=> {
    console.log('inside the api=====, req', req.user)
    if(req && req.user) {
        res.send(req.user)
    } else {
        res.send('no user info here')
    }
});
    
app.get("/api/logout", (req, res) => {
    req.logout();
    res.send({'user has been deleted': req.user})
})