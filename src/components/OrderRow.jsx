import "./OrderRow.css";

function OrderRow(props) {
    return (
        <div className="order-row">
            <span>{props.id}</span>
            <span>{props.customer}</span>
            <span className="order-total">{props.total}</span>
        </div>
    );
}

export default OrderRow;