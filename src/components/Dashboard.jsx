import KPISection from "./KPISection";

import ChartSection from "./ChartSection";

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
        <section>
            <h2>Business Dashboard</h2>

            <KPISection />
            
            <ChartSection 
              title="Revenue Trend"
              data={revenueData}
            />

        </section>
    );
}

export default Dashboard;