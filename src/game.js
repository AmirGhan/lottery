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
			let ticketInfo = this.tickets[randomArr[i]];
			let prizeValue = this.percentage[i] * value;
			if (ticketInfo) {
				let winner = new Winner(i + 1, ticketInfo.num, ticketInfo.name, prizeValue)
				this.winners.push(winner)
			} else {
				let ticketName = "NULL"
				let prizeValue = "N/A"
				let noWinner = new Winner(i + 1, randomArr[i], ticketName, prizeValue)
				this.winners.push(noWinner)
			}
		}
		console.log(this.winners)

	}

	restart() {
		// empty the array
	}
}
