import KPISection from "./KPISection";

import ChartSection from "./ChartSection";

import TableSection from "./TableSection";

import ProductSection from "./ProductSection";

import "./Dashboard.css";

import DashboardCard from "./DashBoardCard";

import "./TableSection.css";

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

const recentOrders = [
  {
    id: 1001,
    customer: "John Smith",
    total: "$245",
  },
  {
    id: 1002,
    customer: "Sarah Jones",
    total: "$89",
  },
  {
    id: 1003,
    customer: "Mike Davis",
    total: "$410"
  },
]

function Dashboard() {
    return (
        <section className="dashboard">
          <h2>Business Dashboard</h2>

          <div className="dashboard-grid">

            <div className="kpi-container">
              <KPISection />
            </div>
            <DashboardCard>
              <div className="chart-container">
               <ChartSection 
              title="Revenue Trend"
              data={revenueData}
              dataKey="revenue"
              />
              </div>
            </DashboardCard>
            

            <div className="bottom-section">
              <DashboardCard>
                <TableSection data={recentOrders} />
              </DashboardCard>

              <DashboardCard>
                <ProductSection />
              </DashboardCard>
              
            </div>

          </div>

        </section>
    );
}

export default Dashboard;