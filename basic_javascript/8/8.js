function rentalCarCost(n, cost = 40) {
  if (n < 3) {
    return n * cost;
  } else if (n > 3 && n < 7) {
    return n * cost - 20;
  } else if (n >= 7) {
    return n * cost - 50;
  }
}

console.log(rentalCarCost(2));
