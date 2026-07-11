

const ExpenseForm = () => {
  return (
    <div style={{width: '50%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', margin: '10px', backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
      <input type="text" placeholder="Enter expense title" />
      <input type="number" placeholder="Enter expense amount" />
      <input type="text" placeholder="Enter expense category (optional)" />
      <input type="date" placeholder="Select expense date" />
      <button>Add Expense</button>
    </div>
  )
}

export default ExpenseForm
