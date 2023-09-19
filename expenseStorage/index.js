function addExpense(amount, category, description) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push({ amount, category, description });
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to display expenses from local storage
function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expense.amount} - ${expense.category} - ${expense.description} 
                             <button onclick="editExpense(${index})">Edit</button>
                             <button onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(listItem);
    });
}

// Function to edit an expense
// Function to edit an expense
function editExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expense = expenses[index];
    if (expense) {
        const updatedAmount = prompt('Enter updated amount:', expense.amount);
        const updatedCategory = prompt('Enter updated category:', expense.category);
        const updatedDescription = prompt('Enter updated description:', expense.description);
        
        if (updatedAmount !== null && updatedCategory !== null && updatedDescription !== null) {
            expense.amount = updatedAmount;
            expense.category = updatedCategory;
            expense.description = updatedDescription;
            
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses();
        }
    }
}


// Function to delete an expense
function deleteExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

// Event listener for the expense form
const expenseForm = document.getElementById('expenseForm');
expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const chooseAmount = document.getElementById('chooseAmount').value;
    const chooseCategory = document.getElementById('chooseCategory').value;
    const chooseDescription = document.getElementById('chooseDescription').value;

    addExpense(chooseAmount, chooseCategory, chooseDescription);
    displayExpenses();

    // Clear the form fields
    expenseForm.reset();
});

// Display expenses when the page loads
displayExpenses();