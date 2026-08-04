import Papa from "papaparse";
import superstoreCSV from "../data/superstore.csv?raw";

function generateQuantity() {
    return Math.floor(Math.random() * 5) + 1;
}

function generateProfit(sales) {
    const margin = Math.random() * 0.25 + 0.05;

    return Number((sales * margin).toFixed(2));
}

function parseDate(dateString) {
    const [month, day, year] = dateString.split("/");

    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    );
}

function transformRow(row) {
    const sales = Number(row["Sales"]);

    return {
        id: row["Row ID"],
        orderId: row["Order ID"],
        date: parseDate(row["Order Date"]),
        customer: row["Customer Name"],
        product: row["Product Name"],
        category: row["Category"],
        subCategory: row["Sub-Category"],
        region: row["Region"],
        state: row["State"],
        city: row["City"],
        sales,
        quantity: generateQuantity(),
        profit: generateProfit(sales)
    };
}


export function loadSuperstoreData() {
    return new Promise((resolve, reject) => {
        Papa.parse(superstoreCSV, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {

                const cleanedData = results.data.map(transformRow);

                resolve(cleanedData);

            },
            error: (error) => {
                reject(error);
            }
        });
    });
}