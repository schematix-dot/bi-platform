import KPICard from "./KPIcard";

const metrics = [
  {
    title: "Revenue",
    value: "$125,000",
    change: "+12%",
    isPositive: true,
  },
  {
    title: "Customers",
    value: "4,872",
    change: "-3%",
    isPositive: false,
  },
  {
    title: "Growth",
    value: "18.4%",
    change: "+5%",
    isPositive: true,
  },
  {
    title: "Profit",
    value: "$42,500",
    change: "+8%",
    isPositive: true,
  }
]

function Dashboard() {
    return (
        <section>
            <h2>Business Dashboard</h2>
            
            <div className="kpi-container">
              {metrics.map((metric) => (
                <KPICard
                 key={metric.title}
                 title={metric.title}
                 value={metric.value}
                 change={metric.change}
                 isPositive={metric.isPositive}
                />
             ))}
            </div>
        </section>
    );
}

export default Dashboard;