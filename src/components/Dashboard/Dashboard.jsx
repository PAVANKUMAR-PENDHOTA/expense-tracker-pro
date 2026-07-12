import DashboardCards from "../DashboardCards/DashboardCards"

const Dashboard = () => {
  const dashboardCards = [
    {
      title: "Income Card",
      value: "$1,280",
      icon: "💸",
      color: "#ef5350",
    },
    {
      title: "Expenses Card",
      value: "$4,500",
      icon: "📊",
      color: "#3f51b5",
    },
    {
      title: "Balance Card",
      value: "$720",
      icon: "💰",
      color: "#43a047",
    },
    {
      title: "Transactions Card",
      value: "24",
      icon: "🧾",
      color: "#fb8c00",
    }
  ]
  return (
    <div>
      <DashboardCards cards={dashboardCards} />
    </div>
  )
}

export default Dashboard
  
