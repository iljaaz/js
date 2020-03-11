const MAX_EXPENSES = 150;
let currentExpenses = 0;

function addExpense(description, price) {
  if (amount < 0) {
    return false;
  } else {

  }

  if (currentExpenses + price <= MAX_EXPENSES) {
    currentExpenses += price;
    return true;
  } else {
    return false;
  }
}
