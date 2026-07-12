import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Header from "./components/Header/header"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter"
import Dashboard from "./components/Dashboard/Dashboard"
import './App.css'

function App() {

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
            <ExpenseList />
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
