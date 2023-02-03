function descountTickets(ticketCount) {
  const first100Ticket = 100;
  const first200Ticket = 90;
  const restTickets = 70;

  if (ticketCount <= 100) {
    const price = ticketCount * 100;
    return price;
  } else if (ticketCount <= 200) {
    const first100 = 100 * first100Ticket;
    const restCount = (ticketCount - 100) * first200Ticket;

    const totalPrice = first100 + restCount;
    return totalPrice;
  } else {
    const first100 = 100 * first100Ticket;
    const first200 = 100 * first200Ticket;
    const restTicket = (ticketCount - 200) * restTickets;
    const totalPrices = first100 + first200 + restTicket;
    return totalPrices;
  }
}

const prices = descountTickets(201);
console.log(prices);
