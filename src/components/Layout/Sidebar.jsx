import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

    return (
        <aside className="sidebar">

            <h2>
                BI Platform
            </h2>

            <nav>

                <ul>

                    <li>
                        <Link to="/">
                            📊 Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/sales">
                            💰 Sales
                        </Link>
                    </li>

                    <li>
                        <Link to="/customers">
                            👥 Customers
                        </Link>
                    </li>

                    <li>
                        <Link to="/products">
                            📦 Products
                        </Link>
                    </li>

                    <li>
                        <Link to="/inventory">
                            🏭 Inventory
                        </Link>
                    </li>

                </ul>

            </nav>

        </aside>
    );
}

export default Sidebar;