const express = require('express');
const app = express();
const PORT = 3000;
const game = new (require('./src/game'))();

app.get("/", function(req, res) {
  res.send("Hellooooo")
});

app.post("/purchase", function(req, res) {
  let ticket = game.purchase("Amir");
  console.log("Purchased By: " + ticket.name + " , Ticket number: " + ticket.num + ", Price: " + ticket.val);
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
