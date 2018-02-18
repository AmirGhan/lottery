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
		if (this.tickets.length < 50) {
			let ticketNumber = this.tickets.length + 1;
			let ticket = new Ticket(name, ticketNumber);
			this.tickets.push (ticket);
			this.pot.increase();
			return ticket;
		}
	}

	draw() {
		let randomArr = []
		while(randomArr.length < 3){
    	let randomNumber = Math.floor(Math.random() * 5);
    	if(randomArr.includes(randomNumber)) continue;
    	randomArr.push(randomNumber);
		}

		let value = this.pot.winningPot();
		console.log("Value of the Pot: $" + value);

		for (let i = 0; i < randomArr.length; i++) {
			let ticketInfo = this.tickets[randomArr[i]];
			let prizeValue = Math.floor(this.percentage[i] * value);
			if (ticketInfo) {
				let winner = new Winner(i + 1, ticketInfo.num, ticketInfo.name, prizeValue);
				this.winners.push(winner);
			} else {
				let noWinner = new Winner(i + 1, randomArr[i] + 1, "NULL", prizeValue);
				this.winners.push(noWinner);
				this.pot.increase(prizeValue);
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
