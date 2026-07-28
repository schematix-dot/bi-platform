import "./ProductRow.css";

function ProductRow(props) {
    return (
        <div className="product-row">
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.sales}</span>
        </div>
    );
}

export default ProductRow;