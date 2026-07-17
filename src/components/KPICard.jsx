import "./KPICard.css"

function KPICard(props) {
    return (
        <div className="kpi-card">
            <h3>{props.title}</h3>
            <p>{props.value}</p>
        </div>
    );
}

export default KPICard;