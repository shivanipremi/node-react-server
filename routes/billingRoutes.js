
const keys = require("../config/keys")
const stripe = require("stripe")(keys.stripeSecretyKey);
const mongoose = require("mongoose")
const User = mongoose.model('users');
const requireLogin = require("../middlewares/requireLogin")


app.post("/api/stripe_token", requireLogin, async (req, res) => {
    console.log("in the stripe_token==========", req.body)
    try {
        let data = await stripe.charges.create({
            amount : 500,
            currency : 'usd',
            description : "5$ for 5 credits",
            source : req.body.id
        })
        console.log("data from stripe token===", data)
        console.log("check user here====new", req.user)
        req.user.credits += 5;
        const user = await User.findOneAndUpdate({_id : req.user._id}, {$inc : {credits : 5}}, {new : true})
        console.log("user after update=====", user);
        
        res.send(user)

    } catch(err) {
        console.log("error occured here====", err)
    }
   
})