"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
            break;
        case orders_1.PriceBracket.Medium:
            return 20;
            break;
        case orders_1.PriceBracket.High:
            return 30;
            break;
        default:
            return 0;
            break;
    }
}
;
// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    let maxPrice = getMaxPrice(price);
    orders[0].filter((order) => order.price <= getMaxPrice(price));
    orders.forEach((val) => {
        let result = val.filter((val2) => {
            return val2.price <= maxPrice;
        });
        filteredOrders.push(result);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(res, orders) {
    res.forEach((res_name, index) => {
        if (orders[index].length > 0) {
            console.log(res_name.name);
            orders[index].forEach((order) => {
                console.log(`- Order (${order.name}): $${order.price}`);
            });
        }
    });
}
// Main
const eligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
console.log(eligibleOrders);
console.log(printOrders(restaurants_1.restaurants, eligibleOrders));
