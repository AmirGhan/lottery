$( document ).ready(function() {

//==============================================================================
// Sending the buyer name to the server and recieve back the ticket
//==============================================================================
  $("#purchase").submit(function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    $.ajax({
    url: '/purchase',
    method: 'POST',
    data: data,
    success: function (ticket) {
      renderTickets([ticket]);
    }
    });

  });


  function renderTickets(data) {
    let $container = $("#tickets");
    data.forEach(function(ticketData) {
      const section = createTicketElement(ticketData);
      $container.prepend(section);
   });
  };


  function createTicketElement (ticket) {
    let $ticketContent = $("<p>").addClass().text("Ticket number: " + ticket.num + " , Purchased by: " + ticket.name + " , Price: " + ticket.val);
    return $ticketContent;
  };


  //==============================================================================
  // DRAW
  //==============================================================================
  $("#draw").submit(function (event) {
    event.preventDefault();
    $.ajax({
    url: '/draw',
    method: 'POST',
    success: function (pot) {
      printPot(pot);
    }
    });

  });

  function printPot(pot) {
    let $container = $("#winnablePot");
    let section = $("<p>").addClass().text("Winnable Value of the Pot: $" + pot);
    $container.prepend(section);
  }



//==============================================================================
// WINNERS
//==============================================================================
  $("#winners").submit(function (event) {
    event.preventDefault();
    $.ajax({
    url: '/winners',
    method: 'POST',
    success: function (winners) {
      renderWinners(winners)
    }
    });

  });

  function renderWinners(data) {
    let $container = $("#winnersArticle");
    data.forEach(function(winnerData) {
      const section = createWinnerElement(winnerData);
      $container.append(section);
   });
  };

  function createWinnerElement (winner) {
    let $winnerContent = $("<p>").addClass().text("Rank: " + winner.rank + " , Ticket number: " + winner.ticketNumber + " , Name: " + winner.ticketName + " , Prize value: " + winner.prizeVal);

    return $winnerContent;
  };


});
