import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="expenseList">
      <h1>Expense List</h1>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
        ))
      ) : (
        <p>No expenses to display.</p>
      )}
    </div>
  )
}

export default ExpenseList
