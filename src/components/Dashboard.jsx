import KPICard from "./KPIcard";

function Dashboard() {
    return (
        <section>
            <h2>Business Dashboard</h2>
            
            <div className="kpi-container">
              <KPICard 
                title="Revenue" 
                value="$125,000" 
                change="+12%"
                isPositive={true}
              />

              <KPICard 
                title="Customers"
                value="4,872"
                change="-3%"
                isPositive={false}
              />
            
              <KPICard 
                title="Growth"
                value="+18.4%"
              />
            </div>
        </section>
    );
}

export default Dashboard;