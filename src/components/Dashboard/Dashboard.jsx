import DashboardCards from "../DashboardCards/DashboardCards"

const formatCurrency = (value) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const Dashboard = ({ expenses = [] }) => {
  const isIncomeEntry = (entry) =>
    entry?.category?.toLowerCase() === "income" ||
    entry?.title?.toLowerCase() === "salary"

  const totalIncome = expenses.reduce((sum, entry) => {
    return isIncomeEntry(entry) ? sum + Number(entry.amount || 0) : sum
  }, 0)
  
  const totalExpenses = expenses.reduce((sum, entry) => {
    return isIncomeEntry(entry) ? sum : sum + Number(entry.amount || 0)
  }, 0)

  const totalBalance = totalIncome - totalExpenses
  const totalTransactions = expenses.length

  const dashboardCards = [
    {
      title: "Total Balance",
      value: formatCurrency(totalBalance),
      icon: "💰",
      color: "#43a047",
    },
    {
      title: "Total Income",
      value: formatCurrency(totalIncome),
      icon: "💸",
      color: "#ef5350",
    },
    {
      title: "Total Expenses",
      value: formatCurrency(totalExpenses),
      icon: "📊",
      color: "#3f51b5",
    },
    {
      title: "Total Transactions",
      value: totalTransactions.toString(),
      icon: "🧾",
      color: "#fb8c00",
    },
  ]

  return (
    <div>
      <DashboardCards cards={dashboardCards} />
    </div>
  )
}

export default Dashboard

