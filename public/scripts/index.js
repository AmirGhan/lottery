$( document ).ready(function() {

//==============================================================================
// Sending the buyer name to the server and recieve back the ticket
//==============================================================================
  $("form").submit(function (event) {
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




});
