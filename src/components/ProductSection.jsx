import "./ProductSection.css";

import ProductRow from "./ProductRow";

import EmptyState from "./EmptyState/EmptyState";

function ProductSection(props) {

    if (props.products.length === 0) {
        return (
            <div>
                <EmptyState message="No products found" />
            </div>
        );
    }


    return (
        <div className="product-section section-card">
            <h2 className="section-title">Top Products</h2>

            <div className="product-header">
                <span>Name</span>
                <span>Sales</span>
            </div>

            <div className="product-list">
                {props.products.map((product) => (
                    <ProductRow 
                        key={product.product}
                        name={product.product}
                        sales={product.revenue}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductSection;
