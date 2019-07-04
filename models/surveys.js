const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipientSchema = require("./recipient")

const surveySchema = new Schema({
    title : String,
    subject : String,
    body : String,
    recipients : [recipientSchema],
    yes : {type : Number, default : 0},
    no : {type : Number, default : 0},
    dateSent : Date,
    dateResponded : Date,
    _user : {type : Schema.Types.ObjectId, ref : 'users'}

});

mongoose.model('surveys', surveySchema);
