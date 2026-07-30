import KPICard from "./KPICard";

function KPISection({metrics}) {
    return(
        <div className="kpi-container">
              {metrics.map((metric) => (
                <KPICard
                 key={metric.title}
                 title={metric.title}
                 value={metric.value}
                 change={metric.change}
                 isPositive={metric.isPositive}
                />
             ))}
        </div>
    );
}


export default KPISection;