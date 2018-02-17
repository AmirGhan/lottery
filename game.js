const Pot = require('./pot')
const Ticket = require('./ticket')

module.exports = class Game {
	consructor () {
		this.pot = new Pot();
		this.tickets = [];
	}

	purchase(name) {
		let ticket = new Ticket(name);
		// let ticket = new Ticket(name, ticket.length + 1);
		// this.tickets.push (ticket);
		return ticket;
	}
}
