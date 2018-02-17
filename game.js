const Pot = require('./pot')
const Ticket = require('./ticket')

module.exports = class Game {
	constructor () {
		this.pot = new Pot();
		this.tickets = [];
	}

	purchase(name) {
		let ticketNumber = this.tickets.length + 1
		let ticket = new Ticket(name, ticketNumber);
		this.tickets.push (ticket);
		let currentPot = this.pot.increase()
		console.log("Pot amount: " + currentPot)
		return ticket;
	}
}
