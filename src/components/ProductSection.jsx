import "./ProductSection.css";

import ProductRow from "./ProductRow";

function ProductSection(props) {
    return (
        <div className="product-section">
            <h2>Top Products</h2>

            <div className="table-header">
                <span>ID</span>
                <span>Name</span>
                <span>Sales</span>
            </div>

            <div className="product-list">
                {props.data.map((product) => (
                    <ProductRow 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        sales={product.sales}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductSection;
