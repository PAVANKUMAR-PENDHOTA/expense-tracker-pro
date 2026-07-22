
import "./ExpenseItem.css"
const ExpenseItem = ({ expense, onDeleteExpense, onEdit }) => {
return (
    <div className="expenseItem">
      <table className="expenseTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{expense.id}</td>
            <td>{expense.title}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>{expense.notes}</td>
            <td>
              <button onClick={() => onEdit(expense.id)}>✏️</button><br/>
              <button onClick={() => onDeleteExpense(expense.id)}>❌</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  )
}

export default ExpenseItem
