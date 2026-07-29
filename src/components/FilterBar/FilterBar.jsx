import "./FilterBar.css";

function FilterBar(props) {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label>Date Range</label>
                <select
                    value={props.dateRange}
                    onChange={(e) => props.setDateRange(e.target.value)}
                >
                 <option>Last 7 Days</option>
                 <option>Last 30 Days</option>
                 <option>Last 90 Days</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Region</label>
                <select 
                    value={props.region}
                    onChange={(e) => props.setRegion(e.target.value)}
                >
                    <option>All Regions</option>
                    <option>North</option>
                    <option>South</option>
                    <option>East</option>
                    <option>West</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Category</label>
                <select
                    value={props.category}
                    onChange={(e) => props.setCategory(e.target.value)}
                >
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Software</option>
                    <option>Services</option>
                </select>
            </div>

        </div>
    );
}

export default FilterBar;