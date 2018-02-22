const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const game = new (require('./src/game'))();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index")
});

app.post("/purchase", function(req, res) {
  let ticket = game.purchase(req.body.name);
  res.send(ticket)
});

app.post("/draw", function(req, res) {
  let winnablePot = game.draw()
  console.log("Winnable Value of the Pot: $" + winnablePot);
});

app.post("/winners", function(req, res) {
  let results = game.result();
  console.log(results)
});

app.post("/restart", function(req, res) {
  game.restart();

});



app.listen(PORT, () => {
  console.log("Lottery app listening on port " + PORT);
});
