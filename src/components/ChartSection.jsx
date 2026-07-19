import {
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

            <LineChart width={500} height={300} data={props.data}>
                <CartesianGrid />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />
                <Line type="monotone" dataKey="revenue" />
            </LineChart>
        </div>
    );
}

export default ChartSection;