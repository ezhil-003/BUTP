const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');


app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  })
);
app.use(bodyParser.json());


  const internalSchema = mongoose.Schema({
    _id: String,
    name: String,
    marks: Number,
  });
  
  const externalSchema = mongoose.Schema({
    _id: String,
    name: String,
    marks: Number,
  });
  
  const InternalModel = mongoose.model("internalSchema", internalSchema);
  const ExternalModel = mongoose.model("externalSchema", externalSchema);

module.exports = { InternalModel, ExternalModel };
  