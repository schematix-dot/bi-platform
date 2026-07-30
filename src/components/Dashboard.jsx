import KPISection from "./KPISection";

import ChartSection from "./ChartSection";

import TableSection from "./TableSection";

import ProductSection from "./ProductSection";

import "./Dashboard.css";

import DashboardCard from "./DashBoardCard";

import "./TableSection.css";

import "./ProductSection.css";

import FilterBar from "./FilterBar/FilterBar";

import { useState } from "react";

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
    total: 245,
    region: "North",
    category: "Software"
  },
  {
    id: 1002,
    customer: "Sarah Jones",
    total: 89,
    region: "West",
    category: "Electronics"
  },
  {
    id: 1003,
    customer: "Mike Davis",
    total: 410,
    region: "South",
    category: "Services"
  },
  {
    id: 1004,
    customer: "Barry Jones",
    total: 337,
    region: "South",
    category: "Software"
  },
  {
    id: 1005,
    customer: "Mike Owen",
    total: 235,
    region: "South",
    category: "Eletronics"
  },
  {
    id: 1006,
    customer: "John Smith",
    total: 625,
    region: "North",
    category: "Services"
  },
  {
    id: 1007,
    customer: "Emily Granner",
    total: 634,
    region: "East",
    category: "Services"
  },
];

const topProducts = [
  {
    id: 1,
    name: "Analytics Pro",
    sales: 540
  },
  {
    id: 2,
    name: "Dashboard Suite",
    sales: 420
  },
  {
    id: 3,
    name: "Data Connector",
    sales: 310
  },
];

function Dashboard() {

    const [region, setRegion] = useState("All Regions");

  const [dateRange, setDateRange] = useState("Last 30 Days");

  const [category, setCategory] = useState("All Categories");

  const filteredOrders = recentOrders.filter((order) => {
    const matchesRegion = 
      region === "All Regions" || order.region === region;

    const matchesCategory =
      category === "All Categories" || order.category === category;
      

  return matchesRegion && matchesCategory;
});

  const totalRevenue = filteredOrders.reduce((total, order)=> {
    return total + order.total;
  }, 0);

   const totalOrders = filteredOrders.length;

   const totalCustomers = new Set(
    filteredOrders.map(order => order.customer)
   ).size;

  const metrics = [
  {
    title: "Revenue",
    value: `$${totalRevenue.toLocaleString()}`,
    isPositive: true,
  },
  {
    title: "Customers",
    value: totalCustomers.toLocaleString(),
    isPositive: false,
  },
  {
    title: "Orders",
    value: totalOrders.toLocaleString(),
    isPositive: true,
  },
  {
    title: "Profit",
    value: "$42,500",
    change: "+8%",
    isPositive: true,
  }
];

    return (
        <section className="dashboard">
        <div className="dashboard-header">
          <h2>Sales Dashboard</h2>
          <FilterBar
            region={region}
            setRegion={setRegion}
            dateRange={dateRange}
            setDateRange={setDateRange}
            category={category}
            setCategory={setCategory}
          />
        </div>

          <div className="dashboard-grid">

            <div className="kpi-container">
              <KPISection metrics={metrics} />
            </div>
            <DashboardCard>
              <div className="chart-container">
               <ChartSection 
              data={revenueData}
              dataKey="revenue"
              />
              </div>
            </DashboardCard>
            

            <div className="bottom-section">
              <DashboardCard>
                <TableSection data={filteredOrders} />
              </DashboardCard>

              <DashboardCard>
                <ProductSection data={topProducts} />
              </DashboardCard>
              
            </div>

          </div>

        </section>
    );
}

export default Dashboard;