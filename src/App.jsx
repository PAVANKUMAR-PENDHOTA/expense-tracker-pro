import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Header from "./components/Header/header"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter"
import Dashboard from "./components/Dashboard/Dashboard"
import './App.css'

function App() {
  const expenses = [
  {
    id: 1,
    title: "Salary",
    amount: 50000,
    category: "Income",
    date: "2026-07-18",
    note: "Salary for July"
  },
  {
    id: 2,
    title: "Food",
    amount: 450,
    category: "Food",
    date: "2026-07-17",
    note: "Weekly grocery shopping"
  }
];

  return (
    <>
      <div>
        <Header />
        <Dashboard />
        <div className="card-container">
          <div className="card">
            <ExpenseForm />
          </div>
          <div className="card">
            <ExpenseList expenses={expenses} />
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
