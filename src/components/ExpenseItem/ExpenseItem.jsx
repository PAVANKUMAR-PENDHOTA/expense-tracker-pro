

const ExpenseItem = ({ expense }) => {
  console.log('ExpenseItem props:', expense); // Log the props to check if they are received correctly
  return (
    <div className="expenseItem">
      <h3>{expense.title}</h3>
      <p>Amount: ${expense.amount}</p>    {/*expense.amount.toFixed(2) */}
      <p>Category: {expense.category}</p>
      <p>Date: {expense.date}</p>
      <p>Note: {expense.note}</p>
      <button>Edit</button>&nbsp;
      <button>Delete</button>
    </div>
  )
}

export default ExpenseItem
