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

    // Error Handling when the values are not numbers
    if (
      isNaN(income) ||
      isNaN(foodExpenses) ||
      isNaN(rentExpenses) ||
      isNaN(clothesExpenses)
    ) {
      document.getElementById("error-field-one").innerText =
        "Please, Enter valid numbers!";
    }
    // Error handling when the values are negative
    else if (
      income < 0 ||
      foodExpenses < 0 ||
      rentExpenses < 0 ||
      clothesExpenses < 0
    ) {
      document.getElementById("error-field-one").innerText =
        "Please, Enter positive values!";
    }
    // Error handling when expenses is greater than income
    else if (totalExpenses > income) {
      document.getElementById("error-field-one").innerText =
        "You cannot expense more than " + income + "tk!";
    }
    // Generate the result when no errors found
    else {
      // Set Total Expenses as the innerText of Total Expenses Field
      document.getElementById("total-expenses").innerText =
        totalExpenses.toFixed(2);
      // Calculate the balance
      const balance = income - totalExpenses;
      // Set the balance as the innerText of Balance Field
      document.getElementById("balance").innerText = balance.toFixed(2);
    }
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

  // Error Handling when saving rate is not a valid number
  if (isNaN(savingRate) || savingRate < 0) {
    document.getElementById("error-field-two").innerText =
      "Please, Enter a valid saving rate!";
  }
  // Error handling when saving amount is greater than balance
  else if (savingAmount > balance) {
    document.getElementById("error-field-two").innerText =
      "You don't have sufficient balance for saving " + savingRate + "%";
    // So remaining balance will be equals to balance
    document.getElementById("remaining-balance").innerText = balance.toFixed(2);
  }
  // Genarate the result when no errors found
  else {
    // Set the Saving Amount as the innerText of Saving Ammount Field
    document.getElementById("saving-amount").innerText =
      savingAmount.toFixed(2);
    // Calculate Remaining Balance
    const remainingBalance = balance - savingAmount;
    // Set the remaining balance as the innerText of remaining balance field
    document.getElementById("remaining-balance").innerText =
      remainingBalance.toFixed(2);
  }
});
