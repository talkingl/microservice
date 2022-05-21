const require = createRequire(import.meta.url);
const data = require("./example.json");
console.log(data);
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();
import fetch from "node-fetch";
let address = "";

app.set("port", 5001);
const path = require("path");
import { createRequire } from "module";

let apiKeyGoogle = "AIzaSyDox_9FduiYxYnVhbK4dOtsqYiHgMEQEGQ";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/address", function (req, res, next) {
  console.log(req.body);
  let lat = String(req.body.lat);
  let long = String(req.body.long);
  console.log(`${lat}, ${long}`);
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDox_9FduiYxYnVhbK4dOtsqYiHgMEQEGQ`
  )
    .then((res) => res.json())
    .then((text) => (address = text["results"][0]["formatted_address"]))
    .then(() => console.log(address))
    .catch((error) => console.error("error:", error));
  res.end();
});

app.get("/getcoordinates", function (req, res, next) {
  res.json({ data });
  console.log("here");
  //   fetch(
  //     "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDox_9FduiYxYnVhbK4dOtsqYiHgMEQEGQ"
  //   ).then((res) => res.json()["results"][0]["formatted_address"]);
  // .then((text) => (address = text["results"][0]["formatted_address"]))
  // .then(() => console.log(address));
});

app.get("/getaddress", function (req, res, next) {
  console.log(address);
  res.json({ address });
});

let message = ""

app.get("/getmessage", function (req, res, next) {
  console.log(message);
  res.json({ message });
});

app.post("/postmessage", function (req, res, next) {
  console.log(req.body.message);
  message = req.body.message
  res.end()
});


app.put("/", (err, res) => {
  res.status(200);
  res.send("working");
  res.end();
});

app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
