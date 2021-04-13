const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Define API routes here
require('./routes/api_routes')(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});