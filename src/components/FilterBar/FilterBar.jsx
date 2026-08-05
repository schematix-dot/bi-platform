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
                 <option>All Time</option>
                 <option>Year to Date</option>
                 <option>Last 90 Days</option>
                 <option>Last 30 Days</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Region</label>
                <select 
                    value={props.region}
                    onChange={(e) => props.setRegion(e.target.value)}
                >
                    {props.regions.map((region) => (
                        <option key={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label>Category</label>
                <select
                    value={props.category}
                    onChange={(e) => props.setCategory(e.target.value)}
                >
                    {props.categories.map((category) => (
                        <option key={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default FilterBar;