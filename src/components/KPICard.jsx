import "./KPICard.css"

function KPICard(props) {
    return (
        <div className="kpi-card">
            <h3>{props.title}</h3>
            <p>{props.value}</p>
            <p className={`change ${props.isPositive ? "positive" : "negative"}`}>{props.change}</p>
        </div>
    );
}

export default KPICard;