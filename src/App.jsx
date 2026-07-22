import {useState} from "react"
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Header from "./components/Header/header"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter"
import Dashboard from "./components/Dashboard/Dashboard"
import './App.css'

function App() {
  const dummyExpenses = [
  {
    id: 1,
    title: "Salary",
    amount: 50000,
    category: "Income",
    date: "2026-07-18",
    notes: "Salary for July"
  },
  {
    id: 2,
    title: "Food",
    amount: 450,
    category: "Food",
    date: "2026-07-17",
    notes: "Weekly grocery shopping"
  }
];
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [editExpense, setEditExpense] = useState(null); 

  const handleAddExpense = (newExpense) => {
    const expenseWithId = { ...newExpense, id: expenses.length + 1 };
    setExpenses((prevExpenses) => [...prevExpenses, expenseWithId]);
    setEditExpense(null);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
    setEditExpense(null);
  };

  const handleDeleteExpense = (expenseId) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
      if (editExpense?.id === expenseId) {
        setEditExpense(null);
      }
    }
  };

  const handleEdit = (expenseId) => {
    const expenseToEdit = expenses.find((expense) => expense.id === expenseId);
    if (expenseToEdit) {
      setEditExpense(expenseToEdit);
    }
  };

  return (
    <>
      <div>
        <Header />
        <Dashboard expenses={expenses} />
        <div className="card-container">
          <div className="card">
            <ExpenseForm
              key={editExpense?.id ?? 'new'}
              onAddExpense={handleAddExpense}
              onUpdateExpense={handleUpdateExpense}
              editExpense={editExpense}
            />
          </div>
          <div className="card expense-list-card">
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} onEdit={handleEdit} />
          </div>
        </div>
        <div className="filter-container">
          <SearchBar />
          <CategoryFilter />
        </div>
      </div>
    </>
  )
}

export default App  
