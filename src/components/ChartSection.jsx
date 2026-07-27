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

function ChartSection(props) {

    return (
        <div className="chart-section">
            <h2>{props.title}</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={props.data}>
                <CartesianGrid />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />
                <Line type="monotone" dataKey={props.dataKey} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ChartSection;