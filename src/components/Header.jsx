import "./Header.css";

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.description}</p>

            <button className="primary-button">
                Get Started
            </button>
            <button className="primary-button">
                Learn More
            </button>
        </header>
    );
}

export default Header;