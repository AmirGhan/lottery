const Pot = require('./pot')
const Ticket = require('./ticket')
const Winner = require('./winner')

module.exports = class Game {
	constructor () {
		this.pot = new Pot();
		this.tickets = [];
		this.winners = [];
		this.percentage = [0.75, 0.15, 0.10];
	}

	purchase(name) {
		if (this.tickets.length < 50) { // Ensuring maximum 50 tickets can be purchased
			let ticketNumber = this.tickets.length + 1;
			let ticket = new Ticket(name, ticketNumber);
			this.tickets.push (ticket);
			this.pot.increase();
			return ticket;
		} else {
			throw err
		}
	}

	draw() {
		// Generating 3 unique random numbers for the draw
		let randomArr = []
		while(randomArr.length < 3){
    	let randomNumber = Math.floor(Math.random() * 5);
    	if(randomArr.includes(randomNumber)) continue;
    	randomArr.push(randomNumber);
		}
		// Value of the winnable pot
		let value = this.pot.winningPot();
		console.log("Winnable Value of the Pot: $" + value);

    // Matching 3 winner numbers with tickets and prize percentage
		for (let i = 0; i < randomArr.length; i++) {
			let ticketInfo = this.tickets[randomArr[i]];
			let prizeValue = Math.floor(this.percentage[i] * value);
			if (ticketInfo) { // Matched with a purchased ticket
				let winner = new Winner(i + 1, ticketInfo.num, ticketInfo.name, prizeValue);
				this.winners.push(winner);
			} else { // Matched with a NULL ticket
				let noWinner = new Winner(i + 1, randomArr[i] + 1, "NULL", prizeValue);
				this.winners.push(noWinner);
				this.pot.increase(prizeValue); // Transferring the unused amount back to the pot
			}
		}

	}

	winner() {
		console.log(this.winners);
	}

	restart() {
		this.tickets = [];
		this.winners = [];
		this.pot.reset();
	}
}
