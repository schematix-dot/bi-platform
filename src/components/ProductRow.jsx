import "./ProductRow.css";

import { formatCurrency } from "../utils/formatters";

function ProductRow(props) {
    return (
        <div className="product-row">
            <span>{props.name}</span>
            <span className="product-sales">{formatCurrency(props.sales)}</span>
        </div>
    );
}

export default ProductRow;