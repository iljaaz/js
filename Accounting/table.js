const MAX_EXPENSES = 150;
let currentExpenses = 0;

function addExpense(description, amount) {
  if (amount < 0) {
    return false;
  } else {

  }

  if (currentExpenses + amount <= MAX_EXPENSES) {
    currentExpenses += amount;
    return true;
  } else {
    return false;
  }
}
