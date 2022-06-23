var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
});

// adds support for username and password from passport-local-mongoose package
userSchema.plugin(passportLocalMongoose);

var Users = mongoose.model("User", userSchema);
module.exports = Users;
