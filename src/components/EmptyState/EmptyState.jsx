import "./EmptyState.css";

function EmptyState({ message }) {
    return (
        <div className="empty-state">
            <h2>{message}</h2>
            <p>
                Try adjusting your filters to see results.
            </p>
        </div>
    );
}

export default EmptyState;