import DashboardCards from "./components/DashboardCards/DashboardCards"
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Header from "./components/Header/header"
import SearchBar from "./components/SearchBar/SearchBar"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter"
import './App.css'

function App() {

  return (
    <>
    <div>
      <Header/>
      <DashboardCards/>
      <div className="card-container">
          <div className="card">
            <ExpenseForm/>
          </div>
          <div className="card">
            <ExpenseList/>
          </div>
      </div>
      <div className="filter-container">
      <SearchBar/>
      <CategoryFilter/>
      </div>
      
      </div>
    </>
  )
}

export default App  
