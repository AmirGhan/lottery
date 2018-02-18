const Pot = require('./pot')
const Ticket = require('./ticket')

module.exports = class Game {
	constructor () {
		this.pot = new Pot();
		this.tickets = [];
		this.prizes = [];
		this.percentage = [0.75, 0.15, 0.10];
	}

	purchase(name) {
		if (this.tickets.length < 50) {
			let ticketNumber = this.tickets.length + 1
			let ticket = new Ticket(name, ticketNumber);
			this.tickets.push (ticket);
			this.pot.increase()
			return ticket;
		}
	}

	draw() {
		// ensure that the numbers are unique
		let randomArr = []
		while(randomArr.length < 3){
    	let randomNumber = Math.floor(Math.random() * 5);
    	if(randomArr.includes(randomNumber)) continue;
    	randomArr.push(randomNumber);
			console.log(randomNumber)
		}

		let value = this.pot.winningPot();
		console.log(value)

		for (let i = 0; i < randomArr.length; i++) {
			if (this.tickets[randomArr[i]]) {
				let prizeValue = this.percentage[i] * value
				console.log(prizeValue)
			}
		}
		// check if the winnerNum is valid
		// if yes, add the ticket to the winners
	}

	restart() {
		// empty the array
	}
}
