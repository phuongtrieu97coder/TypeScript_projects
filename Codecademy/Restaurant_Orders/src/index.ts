import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket){
  switch(price){
    case PriceBracket.Low:
      return 10;
      break;
    case PriceBracket.Medium:
      return 20;
      break;
    case PriceBracket.High:
      return 30;
      break;
    default:
      return 0;
      break;
  }
};
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]){
  let filteredOrders: Order[][] = [];
  let maxPrice = getMaxPrice(price);
  orders[0].filter((order: Order)=> order.price <= getMaxPrice(price));

  
  orders.forEach((val: Order[])=>{
    let result = val.filter((val2: Order)=>{
      return val2.price <= maxPrice;
    });
    filteredOrders.push(result);
  });

  return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(res: Restaurant[], orders: Order[][]){
  res.forEach((res_name: Restaurant, index: number)=>{
    if(orders[index].length>0){
      console.log(res_name.name);
      orders[index].forEach((order)=>{
        console.log(`- Order (${order.name}): $${order.price}`);
      });
    }
  });
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(eligibleOrders);
console.log(printOrders(restaurants, eligibleOrders));
