

const DashboardCards = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '20px',gap: '20px'}}>
        <div style={{width: '25%', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
            <h3>Total Income</h3>
            <p>$5000</p>
        </div>
        <div style={{width: '25%', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
            <h3>Total Expenses</h3>
            <p>$3000</p>
        </div>
        <div style={{width: '25%', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
            <h3>Balance</h3>
            <p>$2000</p>
        </div>
        <div style={{width: '25%', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
            <h3>Transactions</h3>
            <p>10</p>
        </div> 
    </div>
  )
}

export default DashboardCards
