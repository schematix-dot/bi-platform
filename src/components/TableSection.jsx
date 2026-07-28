
import "./TableSection.css";
import OrderRow from "./OrderRow";

function TableSection(props) {
    return(
        <div className="table-section">
            <h2>Recent Orders</h2>

            <div className="table-header">
                <span>Order</span>
                <span>Customer</span>
                <span>Total</span>
            </div>

            <div className="order-list">
                {props.data.map((order) => (
                    <OrderRow
                        key={order.id}
                        id={order.id}
                        customer={order.customer}
                        total={order.total}
                    />
                ))}
            </div>

        </div>
    );
}

export default TableSection;