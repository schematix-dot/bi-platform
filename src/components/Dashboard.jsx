import KPISection from "./KPISection";
import ChartSection from "./ChartSection";
import TableSection from "./TableSection";
import ProductSection from "./ProductSection";
import "./Dashboard.css";
import DashboardCard from "./DashBoardCard";
import "./TableSection.css";
import "./ProductSection.css";
import FilterBar from "./FilterBar/FilterBar";

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

useEffect(() => {
    loadSuperstoreData()
        .then((data) => {
            setOrders(data);
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

  const filteredOrders = orders.filter((order) => {
    const matchesRegion = 
      region === "All Regions" || order.region === region;

    const matchesCategory =
      category === "All Categories" || order.category === category;
      

  return matchesRegion && matchesCategory;
});

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
    value: `$${totalRevenue.toLocaleString()}`,
    change: `${revenueChange.toFixed(1)}%`,
    isPositive: revenueChange >= 0
},
{
    title: "Customers",
    value: totalCustomers.toLocaleString(),
    change: `${customersChange.toFixed(1)}%`,
    isPositive: customersChange >= 0
},
{
    title: "Orders",
    value: totalOrders.toLocaleString(),
    change: `${ordersChange.toFixed(1)}%`,
    isPositive: ordersChange >= 0
},
{
    title: "Profit",
    value: `$${Math.round(totalProfit).toLocaleString()}`,
    change: `${profitChange.toFixed(1)}%`,
    isPositive: profitChange >= 0
},
{
    title: "Units Sold",
    value: totalUnits.toLocaleString(),
    change: `${unitsChange.toFixed(1)}%`,
    isPositive: unitsChange >= 0
}
];

const chartData = calculateRevenueByMonth(filteredOrders);

const topProducts = calculateTopProducts(
    filteredOrders,
    5
);

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