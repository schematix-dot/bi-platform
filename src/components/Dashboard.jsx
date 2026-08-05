import KPISection from "./KPISection";
import ChartSection from "./ChartSection";
import TableSection from "./TableSection";
import ProductSection from "./ProductSection";
import "./Dashboard.css";
import DashboardCard from "./DashBoardCard";
import "./TableSection.css";
import "./ProductSection.css";
import FilterBar from "./FilterBar/FilterBar";
import EmptyState from "./EmptyState/EmptyState";

import { useEffect, useState } from "react";

import { loadSuperstoreData } from "../services/dataService";

import {
    calculateTotalRevenue,
    calculateTotalProfit,
    calculateTotalUnits,
    calculateTotalOrders,
    calculateTotalCustomers,
    getCurrentMonth,
    getPreviousMonth,
    getOrdersForMonth,
    calculateKPIChanges,
    calculateRevenueByMonth,
    calculateTopProducts
} from "../utils/analytics";

function Dashboard() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    loadSuperstoreData()
        .then((data) => {
            setOrders(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
}, []);

const regions = [
  "All Regions",
  ...new Set(orders.map(order => order.region))
];

const categories = [
  "All Categories",
  ...new Set(orders.map(order => order.category))
];

  const [region, setRegion] = useState("All Regions");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [category, setCategory] = useState("All Categories");

  const latestDate = orders.length
    ? Math.max(...orders.map(order => order.date))
    : new Date();

  const today = new Date(latestDate);
  const startDate = new Date(today);

  if (dateRange === "Last 30 Days") {
      startDate.setDate(today.getDate() - 30);
  }

  if (dateRange === "Last 90 Days") {
      startDate.setDate(today.getDate() - 90);
  }

  if (dateRange === "Year to Date") {
      startDate.setMonth(0);
      startDate.setDate(1);
  }

  if (dateRange === "All Time") {
      startDate.setFullYear(2000);
  }

  const filteredOrders = orders.filter((order) => {
    const matchesRegion = 
      region === "All Regions" || order.region === region;

    const matchesCategory =
      category === "All Categories" || order.category === category;

    const matchesDate =
      order.date >= startDate;
      

  return (
    matchesRegion && 
    matchesCategory && 
    matchesDate
  );
});

if (loading) {
    return <h2>Loading dashboard...</h2>;
}

if (filteredOrders.length === 0) {
    return (
        <EmptyState message="No data available" />
    );
}

const currentMonth = getCurrentMonth(filteredOrders);
const previousMonth = getPreviousMonth(currentMonth);

const currentMonthOrders = getOrdersForMonth(
    filteredOrders,
    currentMonth
);

const previousMonthOrders = getOrdersForMonth(
    filteredOrders,
    previousMonth
);

const {
    revenueChange,
    ordersChange,
    customersChange,
    unitsChange,
    profitChange
} = calculateKPIChanges(
    currentMonthOrders,
    previousMonthOrders
);

  const totalRevenue = calculateTotalRevenue(filteredOrders);
  const totalProfit = calculateTotalProfit(filteredOrders);
  const totalUnits = calculateTotalUnits(filteredOrders);
  const totalOrders = calculateTotalOrders(filteredOrders);
  const totalCustomers = calculateTotalCustomers(filteredOrders);

  const metrics = [
{
    title: "Revenue",
    value: totalRevenue,
    change: revenueChange,
    isPositive: revenueChange >= 0
},
{
    title: "Customers",
    value: totalCustomers,
    change: customersChange,
    isPositive: customersChange >= 0
},
{
    title: "Orders",
    value: totalOrders,
    change: ordersChange,
    isPositive: ordersChange >= 0
},
{
    title: "Profit",
    value: totalProfit,
    change: profitChange,
    isPositive: profitChange >= 0
},
{
    title: "Units Sold",
    value: totalUnits,
    change: unitsChange,
    isPositive: unitsChange >= 0
}
];

const chartData = calculateRevenueByMonth(filteredOrders);

const topProducts = calculateTopProducts(
    filteredOrders,
    5
);

if (filteredOrders.length === 0) {
    return (
        <section className="dashboard">
            <h2>No data available</h2>
            <p>
                Try adjusting your filters to see results.
            </p>
        </section>
    );
}

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
              regions={regions}
              categories={categories}
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
                <ProductSection products={topProducts} />
              </DashboardCard>
              
            </div>

          </div>

        </section>
    );
}

export default Dashboard;