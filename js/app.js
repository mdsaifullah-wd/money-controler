// Function: Return input value as a floating point number
function getInputValue(id) {
  const inputField = document.getElementById(id);
  return parseFloat(inputField.value);
}
// Function: Return inner text as a floating point number
function getInnerTextValue(id) {
  const textField = document.getElementById(id);
  return parseFloat(textField.innerText);
}

// Add event listener to the calculate button
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    // Get income value
    const income = getInputValue("income-input");

    // Get all expenses values
    const foodExpenses = getInputValue("food-input");
    const rentExpenses = getInputValue("rent-input");
    const clothesExpenses = getInputValue("clothes-input");

    // Calculate Total Expenses
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    // Set Total Expenses as the innerText of Total Expenses Field
    document.getElementById("total-expenses").innerText = totalExpenses;

    // Calculate the balance
    const balance = income - totalExpenses;
    // Set the balance as the innerText of Balance Field
    document.getElementById("balance").innerText = balance;
  });

// Add event listener to the save button
document.getElementById("save-button").addEventListener("click", function () {
  // Get Income Value
  const income = getInputValue("income-input");

  // Get Saving Rate Value
  const savingRate = getInputValue("saving-rate");

  // Get the balance Text Value
  const balance = getInnerTextValue("balance");

  // Calculate Saving Amount
  const savingAmount = income * (savingRate / 100);
  // Set the Saving Amount as the innerText of Saving Ammount Field
  document.getElementById("saving-amount").innerText = savingAmount;

  // Calculate Remaining Balance
  const remainingBalance = balance - savingAmount;
  // Set the remaining balance as the innerText of remaining balance field
  document.getElementById("remaining-balance").innerText = remainingBalance;
});
