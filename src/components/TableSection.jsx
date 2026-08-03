
import "./TableSection.css";

import OrderRow from "./OrderRow";

import EmptyState from "./EmptyState/EmptyState";

function TableSection(props) {
    
    if (props.data.length === 0) {
        return (
            <div>
                <EmptyState message="No orders found" />
            </div>
        );
    }

    return(
        <div className="table-section section-card">
            <h2 className="section-title">Recent Orders</h2>


            <div className="order-header">
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