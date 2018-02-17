
const readline = require('readline');

const Game = require('./game');
const game = new Game()

function init() {

	// Welcome to game
}

init();


const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Please enter your command: ');
rl.prompt();

rl.on('line', function(line) {
	if (line.startsWith('purchase')) {
		let name = line.split('').slice(9).join('')
		 if (name.length > 0) {
		 	let ticket = game.purchase(name)
      console.log("Purchased By: " + ticket.name + " , Ticket number: " + ticket.num + ", Price: " + ticket.val);
		 } else {
		 	console.log("You must enter a name after 'purchase' command");
		 }
   }
	//  else if (line.tirm() === 'draw')
  //
  //   rl.prompt();
})

rl.on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});
