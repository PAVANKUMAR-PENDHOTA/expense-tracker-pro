
import "./DashboardCards.css"

const DashboardCards = ({ cards = [] }) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={`${card.title}-${index}`}>
          <div
            className="card-icon"
            style={{ backgroundColor: card.color || "#1e88e5" }}
          >
            {card.icon}
          </div>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-value">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards
