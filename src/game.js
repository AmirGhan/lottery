const Pot = require('./pot');
const Ticket = require('./ticket');
const Winner = require('./winner');

const maxTickets = 50;

module.exports = class Game {
	constructor () {
		this.pot = new Pot();
		this.tickets = [];
		this.winners = [];
		this.percentage = [0.75, 0.15, 0.10];
	}

	purchase(name) {
		if (this.tickets.length < maxTickets) { // e.g. Ensuring maximum 50 tickets can be purchased
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
		// Generating unique random numbers for the draw
		let randomArr = [];
		while(randomArr.length < this.percentage.length){ // to change number of winners, add/remove percentages
			let randomNumber = Math.floor(Math.random() * maxTickets);
			if(randomArr.includes(randomNumber)) continue;
			randomArr.push(randomNumber);
		}

		// Value of the winnable pot
		let winnablePot = this.pot.winningPot();

    // Matching winner numbers with tickets and prize percentage
		for (let i = 0; i < randomArr.length; i++) {
			let ticketInfo = this.tickets[randomArr[i]];
			let prizeValue = Math.floor(this.percentage[i] * winnablePot);
			if (ticketInfo) { // Matched with a purchased ticket
				let winner = new Winner(i + 1, ticketInfo.num, ticketInfo.name, prizeValue);
				this.winners.push(winner);
			} else { // Matched with a NULL ticket
				let noWinner = new Winner(i + 1, randomArr[i] + 1, "NULL", prizeValue);
				this.winners.push(noWinner);
				this.pot.increase(prizeValue); // Transferring the unused amount back to the pot
			}
		}
		return winnablePot;
	}

	result() {
		return this.winners
	}

	restart() {
		this.tickets = [];
		this.winners = [];
		this.pot.reset();
	}
}
