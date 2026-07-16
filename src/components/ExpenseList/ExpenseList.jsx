import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <p>No expenses to display.</p>
      )}
    </div>
  )
}

export default ExpenseList
