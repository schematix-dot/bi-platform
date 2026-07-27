import "./DashboardCard.css";

function DashboardCard(props) {
    return (
        <div className="dashboard-card">
            {props.children}
        </div>
    );
}

export default DashboardCard;