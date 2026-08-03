import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import "./ChartSection.css";

import EmptyState from "./EmptyState/EmptyState";

function ChartSection(props) {

    if (props.chartData.length === 0) {
        return (
            <EmptyState message="No data available" />
        );
    }

    return (
        <div className="chart-section">
            <h2 className="section-title">Revenue Trend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={props.chartData}>
                <CartesianGrid />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />
                <Line type="monotone" dataKey="revenue" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ChartSection;