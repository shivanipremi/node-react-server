const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const surveyTemplate = require("../services/templates/surveyTemplate");
const Mailer = require("../services/mailer");
const Survey = mongoose.model("surveys");
const User = mongoose.model("users");

app.get("/api/surveys/thanks", (req, res) => {
  res.send("thanks for voting");
});
app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
  try {
    const { title, body, subject, recipients } = req.body;
    console.log("in the surveys==========sss", req.body);

    const surveyData = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user._id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(surveyData, surveyTemplate(surveyData));
    console.log("check maileer before send======", mailer);
    await mailer.send();
    await surveyData.save();
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $inc: { credits: -1 } },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    res.status(422).send(err);
  }
});
