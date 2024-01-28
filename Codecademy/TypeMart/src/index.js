"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = "fanny pack";
let shipping, taxPercent, taxTotal, total;
let shippingAddress = "4253 Denver St";
let product = products_1.default.filter(product => product.name === productName)[0];
console.log(product);
if (Boolean(product.preOrder) === true) {
    console.log("We'll send you a message when your product is on its way.");
}
;
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product");
}
else {
    shipping = 5;
}
;
if (shippingAddress.includes("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`Product name: ${product.name}.\nShipping address: ${shippingAddress}.\nPrice of the product: \$${product.price}.\nTax total: \$${taxTotal}.\nShipping: \$${shipping}.\nTotal amount: \$${total}.\n`);
