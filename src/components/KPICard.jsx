import "./KPICard.css";

import { formatCurrency } from "../utils/formatters";

function KPICard({ title, value, change, isPositive }) {

    const displayValue =
        title === "Revenue" || title === "Profit"
            ? formatCurrency(value)
            : value;

    return (
        <div className="kpi-card">
            <h3>{title}</h3>

            <p className="kpi-value">
                {displayValue}
            </p>

            <p
                className={`change ${
                    isPositive ? "positive" : "negative"
                }`}
            >
                {isPositive ? "↑" : "↓"} {change.toFixed(1)}%
            </p>
        </div>
    );
}

export default KPICard;