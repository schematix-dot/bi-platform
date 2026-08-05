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

function ChartSection({ chartData }) {

    if (chartData.length === 0) {
        return (
            <EmptyState message="No data available" />
        );
    }

    return (
        <div className="chart-section">
            <h2 className="section-title">Revenue Trend</h2>

            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis 
                    tickFormatter={(value) => {
                    if (value >= 1000000) {
                        return `$${(value / 1000000).toFixed(1)}M`;
                    }

                    return `$${(value / 1000).toFixed(0)}k`;
                }}
                />

                <Tooltip
                    formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Revenue"
                    ]}
                />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    strokeWidth={3}
                    dot={false}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ChartSection;