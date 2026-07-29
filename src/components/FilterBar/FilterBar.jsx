import "./FilterBar.css";

function FilterBar() {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label>Date Range</label>
                <select>
                 <option>Last 30 Days</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Region</label>
                <select>
                    <option>All Regions</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Category</label>
                <select>
                    <option>All Categories</option>
                </select>
            </div>

        </div>
    );
}

export default FilterBar;