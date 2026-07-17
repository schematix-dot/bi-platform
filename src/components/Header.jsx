import "./Header.css";

function Header(props) {
    return (
        <header>
            <nav>
                <h2>Insight BI</h2>

                <button className="login-button">
                    Login
                </button>
            </nav>
            <div className="hero">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <p>{props.description}</p>

                <button className="primary-button">
                  Get Started
                </button>
                <button className="secondary-button">
                  Learn More
                </button>
            </div>
        </header>
    );
}

export default Header;