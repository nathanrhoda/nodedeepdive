// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function(){
//             return this.inventory.reduce((total,book) => total + book.price, 0);
//         },
//         proceForTitle: function(title){
//             return this.inventory.find(book => book.title === title, 0).price;
//         }
//     };
// }

function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total,book) => total + book.price, 0);
        },
        proceForTitle(title){
            return this.inventory.find(book => book.title === title, 0).price;
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10 },
    {title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.proceForTitle('Harry Potter'));