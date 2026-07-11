import DashboardCards from "./components/Dashboard/DashboardCards"
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Header from "./components/Header/header"


function App() {

  return (
    <>
    <div>
      <Header/>
      <DashboardCards/>
      <div style={{width: "100%"}}>
          <div style={{width: "50%", float: "left"}}>
            <ExpenseForm/>
          </div>
          <div style={{width: "50%", float: "right"}}>
            <ExpenseList/>
          </div>
      </div>
      </div>
    </>
  )
}

export default App  
