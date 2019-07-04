const passport = require('passport');

app.get("/auth/google", passport.authenticate('google', {scope : ['profile', 'email']}),(req, res) => {
    res.send({ bye: "buddy" });
  });
app.get("/auth/google/callback", passport.authenticate('google'), (req, res)=> {
    res.redirect('/surveys')
});

app.get("/api/current_user", (req, res)=> {
    console.log('inside the api=====, req', req.user)
    if(req && req.user) {
        res.send(req.user)
    } else {
        res.send('no user info present')
    }
});
    
app.get("/api/logout", (req, res) => {
    console.log("in the logoutout==========sss")
    req.logout();
    console.log("logout here====")
    res.redirect("/")
})