const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BookMeApp", {
  useNewUrlParser: true
});