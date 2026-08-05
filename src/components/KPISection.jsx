import KPICard from "./KPICard";

function KPISection({ metrics }) {
    return (
        <div className="kpi-container">
            {metrics.map((metric) => (
                <KPICard
                    key={metric.title}
                    {...metric}
                />
            ))}
        </div>
    );
}

export default KPISection;