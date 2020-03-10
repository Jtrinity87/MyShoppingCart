let customerName= prompt ("What is your name?");
let product1Name= prompt ("Enter product1 name");

let product1price= prompt ("Enter product1 price");
if (Number(product1price) == 0) {
prompt ("The price can't be 0. Enter a valid price");
} 
let product2Name= prompt ("Enter product2 name");

let product2price= prompt ("Enter product2 price");

let product3Name= prompt ("Enter product3 Name");

let product3price= prompt ("Enter product3 price");


let total= `${product1price} + ${product2price} + ${product3price}`;
prompt("your total equals");

let grandTotal=(total) + 6.25%
prompt((customerName), "your grand total is:" (grandTotal));

console.log(total)


