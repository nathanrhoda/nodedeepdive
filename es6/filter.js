// filter => returns a list of items that meet the condition
var products = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price:1},  
  {name: 'banana', type: 'fruit', quantity: 10, price:15},
  {name: 'celery', type: 'vegetable', quantity: 30, price:9},
  {name: 'orange', type: 'fruit', quantity: 3, price:5},
];

var filteredProducts = [];

for(var i = 0; i< products.length; i++){
    if(products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

//console.log(filteredProducts);

function IsFruit(item) {
    return item.type == 'fruit';
}
var fruitys = products.filter(IsFruit);

var fruits = products.filter(function(product){
    return product.type === 'fruit';            
});

var instocklist = products.filter(function(product){
    return product.type === 'vegetable' &&
           product.quantity > 0 &&
           product.price < 10;            
});

//console.log(instocklist);
console.log(fruitys);