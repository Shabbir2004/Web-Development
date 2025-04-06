document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const expenseAmountDisplay = document.getElementById("total-amount");

  // Load expenses from localStorage or initialize as an empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Render expenses on page load
  renderExpenses();

  // Add new expense on form submission
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(), // Unique ID based on timestamp
        name: name,
        amount: amount,
      };

      expenses.push(newExpense); // Add the new expense to the array
      saveExpences(); // Save to localStorage
      renderExpenses(); // Update the UI

      // Clear form inputs
      expenseName.value = "";
      expenseAmount.value = "";
    } else {
      alert("Please enter a valid name and amount.");
    }
  });

  // Save expenses to localStorage
  function saveExpences() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Render the list of expenses
  function renderExpenses() {
    expenseList.innerHTML = ""; // Clear the list before rendering
    let totalAmount = 0; // Initialize total amount

    expenses.forEach((expense) => {
      totalAmount += expense.amount; // Accumulate total

      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount.toFixed(2)}
        <button data-id="${expense.id}" class="delete-btn">Delete</button>`;
      expenseList.appendChild(li);
    });

    // Update total amount display
    expenseAmountDisplay.textContent = `Total: $${totalAmount.toFixed(2)}`;

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        deleteExpense(id);
      });
    });
  }

  // Delete an expense
  function deleteExpense(id) {
    // Remove the expense from the array
    expenses = expenses.filter((expense) => expense.id !== parseInt(id));

    saveExpences(); // Update localStorage
    renderExpenses(); // Update the UI
  }
});
