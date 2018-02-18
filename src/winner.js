module.exports = class Winner {
  constructor(rank, ticketNumber, ticketName, value) {
    this.rank = rank;
    this.ticketNumber = ticketNumber;
    this.ticketName = ticketName;
    this.prizeVal = value;
  }
}
