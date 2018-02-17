
const readline = require('readline');

const Game = new (require('./game'))();

function init() {

	// Welcome to game
}

init();


// const rl = readline.createInterface(process.stdin, process.stdout);
//
// rl.setPrompt('Please enter your command: ');
// rl.prompt();
//
// rl.on('line', function(line) {
// 	if (line.startWith('purchase')) {
// 		var name =
// 		 if (name.length > 0) {
// 		 	game.purchase (name)
// 		 } else {
// 		 	error message
// 		 }
// 	} else if (line.tirm() === 'draw')
//
//     rl.prompt();
// })
//
// rl.on('close', function() {
//     console.log('Have a great day!');
//     process.exit(0);
// });

rl = readline.createInterface(process.stdin, process.stdout),

rl.setPrompt('Please enter your command: ');
rl.prompt();
rl.on('line', function(line) {
  switch(line.trim()) {
    case 'purchase':
      let ticket = Game.purchase()
      console.log("Purchased By: " + ticket.name + ", Price: " + ticket.val);
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }

  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
