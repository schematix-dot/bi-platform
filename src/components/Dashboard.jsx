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

import { formatCurrency } from "../utils/formatters";

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
    product: "Laptop",
    total: 245,
    region: "North",
    category: "Software",
    month: "Jan"
  },
  {
    id: 1002,
    customer: "Sarah Jones",
    product: "Webcam",
    total: 89,
    region: "West",
    category: "Electronics",
    month: "Feb"
  },
  {
    id: 1003,
    customer: "Mike Davis",
    product: "Monitor",
    total: 410,
    region: "South",
    category: "Services",
    month: "Mar"
  },
  {
    id: 1004,
    customer: "Barry Jones",
    product: "Laptop",
    total: 337,
    region: "South",
    category: "Software",
    month: "Mar"
  },
  {
    id: 1005,
    customer: "Mike Owen",
    product: "Mouse",
    total: 235,
    region: "South",
    category: "Eletronics",
    month: "Apr"
  },
  {
    id: 1006,
    customer: "John Smith",
    product: "Headset",
    total: 625,
    region: "North",
    category: "Services",
    month: "Apr"
  },
  {
    id: 1007,
    customer: "Emily Granner",
    product: "Headset",
    total: 634,
    region: "East",
    category: "Services",
    month: "Mar"
  },
  {
    id: 1008,
    customer: "Barry Jones",
    product: "Laptop",
    total: 634,
    region: "South",
    category: "Electronics",
    month: "Mar"
  },
  {
    id: 1009,
    customer: "Alan Granner",
    product: "Webcam",
    total: 634,
    region: "East",
    category: "Software",
    month: "Jan"
  },
  {
    id: 1010,
    customer: "Emily Granner",
    product: "Mouse",
    total: 634,
    region: "East",
    category: "Electronics",
    month: "Feb"
  },
  {
    id: 1011,
    customer: "Gordon Gray",
    product: "Keyboard",
    total: 634,
    region: "North",
    category: "Services",
    month: "Apr"
  },
  {
    id: 1012,
    customer: "Josh Bunny",
    product: "Monitor",
    total: 634,
    region: "East",
    category: "Services",
    month: "Feb"
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

const revenueByMonth = filteredOrders.reduce((acc, order) => {
  if (!acc[order.month]) {
    acc[order.month] = 0;
  }

  acc[order.month] += order.total;

  return acc;
}, {});

const chartData = Object.entries(revenueByMonth).map(
  ([month, revenue]) => ({
    month,
    revenue
  })
);

const revenueByProduct = filteredOrders.reduce((acc, order) => {
  if (!acc[order.product]) {
    acc[order.product] = 0;
  }

  acc[order.product] += order.total

  return acc;
}, {});

const productData = Object.entries(revenueByProduct).map(
  ([product, revenue]) => ({
    product,
    revenue
  })
);

const topProducts = [...productData]
  .sort((a, b) => b.revenue - a.revenue);

const topFiveProducts = topProducts.slice(0, 5);

console.log(topFiveProducts);

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
              <div className="chart-container section-card">
               <ChartSection chartData={chartData} />
              </div>
            </DashboardCard>
            

            <div className="bottom-section">
              <DashboardCard>
                <TableSection data={filteredOrders} />
              </DashboardCard>

              <DashboardCard>
                <ProductSection products={topFiveProducts} />
              </DashboardCard>
              
            </div>

          </div>

        </section>
    );
}

console.log(formatCurrency(2500));

export default Dashboard;