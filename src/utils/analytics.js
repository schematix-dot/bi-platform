export function calculatePercentChange(current, previous) {
    if (previous === 0) {
        return 0;
    }

    return ((current - previous) / previous) * 100;
}

export function calculateTotalRevenue(orders) {
    return orders.reduce((total, order) => {
        return total + order.sales;
    }, 0);
}


export function calculateTotalProfit(orders) {
    return orders.reduce((total, order) => {
        return total + order.profit;
    }, 0);
}


export function calculateTotalUnits(orders) {
    return orders.reduce((total, order) => {
        return total + order.quantity;
    }, 0);
}


export function calculateTotalOrders(orders) {
    return new Set(
        orders.map(order => order.orderId)
    ).size;
}


export function calculateTotalCustomers(orders) {
    return new Set(
        orders.map(order => order.customer)
    ).size;
}

export function getCurrentMonth(orders) {

    if (orders.length === 0) {
        return new Date();
    }

    return new Date(
        Math.max(
            ...orders.map(order => order.date)
        )
    );
}

export function getPreviousMonth(currentMonth) {
    const previousMonth = new Date(currentMonth);

    previousMonth.setMonth(
        previousMonth.getMonth() - 1
    );

    return previousMonth;
}

export function getOrdersForMonth(orders, month) {
    return orders.filter(order => {
        return (
            order.date.getMonth() === month.getMonth() &&
            order.date.getFullYear() === month.getFullYear()
        );
    });
}

export function calculateKPIChanges(
    currentMonthOrders,
    previousMonthOrders
) {

    const currentRevenue = currentMonthOrders.reduce(
        (total, order) => total + order.sales,
        0
    );

    const previousRevenue = previousMonthOrders.reduce(
        (total, order) => total + order.sales,
        0
    );


    const currentOrders = new Set(
        currentMonthOrders.map(order => order.orderId)
    ).size;

    const previousOrders = new Set(
        previousMonthOrders.map(order => order.orderId)
    ).size;


    const currentCustomers = new Set(
        currentMonthOrders.map(order => order.customer)
    ).size;

    const previousCustomers = new Set(
        previousMonthOrders.map(order => order.customer)
    ).size;


    const currentUnits = currentMonthOrders.reduce(
        (total, order) => total + order.quantity,
        0
    );

    const previousUnits = previousMonthOrders.reduce(
        (total, order) => total + order.quantity,
        0
    );


    const currentProfit = currentMonthOrders.reduce(
        (total, order) => total + order.profit,
        0
    );

    const previousProfit = previousMonthOrders.reduce(
        (total, order) => total + order.profit,
        0
    );


    return {
        revenueChange: calculatePercentChange(
            currentRevenue,
            previousRevenue
        ),

        ordersChange: calculatePercentChange(
            currentOrders,
            previousOrders
        ),

        customersChange: calculatePercentChange(
            currentCustomers,
            previousCustomers
        ),

        unitsChange: calculatePercentChange(
            currentUnits,
            previousUnits
        ),

        profitChange: calculatePercentChange(
            currentProfit,
            previousProfit
        )
    };
}

export function calculateRevenueByMonth(orders) {

    const revenueByMonth = orders.reduce((acc, order) => {

        const month = new Date(
            order.date.getFullYear(),
            order.date.getMonth(),
            1
        );

        const key = month.toISOString();

        if (!acc[key]) {
            acc[key] = 0;
        }

        acc[key] += order.sales;

        return acc;

    }, {});


    return Object.entries(revenueByMonth)
        .map(([month, revenue]) => ({
            month: new Date(month).toLocaleString("default", {
                month: "short",
                year: "numeric"
            }),
            revenue,
            sortDate: new Date(month)
        }))
        .sort((a, b) => a.sortDate - b.sortDate);
}

export function calculateTopProducts(orders, limit = 5) {

    const revenueByProduct = orders.reduce((acc, order) => {

        if (!acc[order.product]) {
            acc[order.product] = 0;
        }

        acc[order.product] += order.sales;

        return acc;

    }, {});


    return Object.entries(revenueByProduct)
        .map(([product, revenue]) => ({
            product,
            revenue
        }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, limit);
}