
const readline = require('readline');
const game = new (require('./game'))();

function init() {
  console.log(
    "********************************** \n" +
    "*** WELCOME TO THE LOTTERY APP *** \n" +
    "**********************************"
  )
};
init();

function printHelp() {
  console.log(
    "COMMANDS: \n" +
    " 'help' for the list of commands \n" +
    " 'purchase NAME' to buy a ticket \n" +
    " 'draw' to select 3 random tickets \n" +
    " 'winners' to see result \n" +
    " 'restart' to reset and start a new game \n" +
    " 'ctrl + C' to exit the app"
  )
};

printHelp();

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Please enter your command: ');
rl.prompt();

rl.on('line', function(line) {
	if (line.startsWith('purchase')) {
		let name = line.slice('purchase '.length);
		 if (name.length > 0) {
		 	try {
        let ticket = game.purchase(name);
        console.log("Purchased By: " + ticket.name + " , Ticket number: " + ticket.num + ", Price: " + ticket.val);
      }
      catch(err){
        console.log("* Maximum number of tickets has been sold! *")
      }
		 } else {
		 	console.log("You must enter a name after 'purchase' command");
		 }
  } else if (line.trim() === 'draw') {
    let winnablePot = game.draw();
    console.log("Winnable Value of the Pot: $" + winnablePot);
  } else if (line.trim() === 'winners') {
    let results = game.result();
    console.log(results)
  } else if (line.trim() === 'restart') {
    game.restart();
  } else if (line.trim() === 'help') {
    printHelp();
  } else {
    console.log("Unknown command")
    printHelp()
  }

    rl.prompt();
})

rl.on('close', function() {
    console.log('*** Thank you for using our app, Have a great day! ***');
    process.exit(0);
});
