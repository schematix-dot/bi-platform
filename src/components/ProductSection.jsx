import "./ProductSection.css";

import ProductRow from "./ProductRow";

function ProductSection(props) {

  console.log(props);


    return (
        <div className="product-section">
            <h2 className="section-title">Top Products</h2>

            <div className="table-header">
                <span>ID</span>
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
