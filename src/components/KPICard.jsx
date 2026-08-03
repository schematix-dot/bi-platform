import "./KPICard.css"

import { formatCurrency } from "../utils/formatters";

function KPICard(props) {
    return (
        <div className="kpi-card">
            <h3>{props.title}</h3>
            <p>
                {props.title === "Revenue"
                ? formatCurrency(props.value)
                : props.value}
            </p>
            <p className={`change ${props.isPositive ? "positive" : "negative"}`}>{props.change}</p>
        </div>
    );
}

export default KPICard;