import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {
    return (
        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Header />

                {children}

            </div>

        </div>
    );
}

export default Layout;