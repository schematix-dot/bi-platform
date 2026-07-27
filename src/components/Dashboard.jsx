import KPISection from "./KPISection";

import ChartSection from "./ChartSection";

import TableSection from "./TableSection";

const revenueData = [
  {
    month: "Jan",
    revenue: 10000,
  },
  {
    month: "Feb",
    revenue: 15000,
  },
  {
    month: "Mar",
    revenue: 13000,
  },
  {
    month: "Apr",
    revenue: 22000,
  },
];

function Dashboard() {
    return (
        <section className="dashboard">
            <h2>Business Dashboard</h2>

            <KPISection />
            
            <div className="chart-container">
               <ChartSection 
              title="Revenue Trend"
              data={revenueData}
              dataKey="revenue"
              />
            </div>
           

            <TableSection />

        </section>
    );
}

export default Dashboard;