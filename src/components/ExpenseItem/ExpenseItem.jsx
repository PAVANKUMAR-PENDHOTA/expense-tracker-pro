

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <h3>{expense.title}</h3>
      <p>Amount: ${expense.amount.toFixed(2)}</p>
      <p>Category: {expense.category}</p>
      <p>Date: {expense.date}</p>
      <p>Note: {expense.note}</p>
      <button>Edit</button>&nbsp;
      <button>Delete</button>
    </div>
  )
}

export default ExpenseItem
