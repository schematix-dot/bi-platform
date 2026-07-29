import "./ProductRow.css";

function ProductRow(props) {
    return (
        <div className="product-row">
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span className="product-sales">{props.sales}</span>
        </div>
    );
}

export default ProductRow;