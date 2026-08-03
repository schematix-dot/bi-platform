import "./EmptyState.css";

function EmptyState(props) {
    return (
        <div className="empty-state">
            {props.message}
        </div>
    )
}

export default EmptyState;