import "./OrderRow.css";

import { formatCurrency } from "../utils/formatters";

function OrderRow(props) {
    return (
        <div className="order-row">
            <span>{props.id}</span>
            <span>{props.customer}</span>
            <span className="order-total">{formatCurrency(props.total)}</span>
        </div>
    );
}

export default OrderRow;