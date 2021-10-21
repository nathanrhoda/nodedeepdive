// const numbers  = [1,2,3,4];
// let total = 0;
// for(let number of numbers) {
//     total += number;
// }


function* shopping () {
    // stuff on the sidewalk

    // walking down the sidewalk    

    // go into the store with cash
    const stuffFromStore = yield 'cash';

    // go to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];

}

//stuff in the store
const gen = shopping();
////console.log(gen.next()); // leaving our house
// walking into the store
// walking up and down the aisles
// purchase our stuff

////console.log(gen.next('groceries')); // leaving the store with groceries

////console.log(gen.next('clean clothes'));


function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

// const gen1 = colors();
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());

const myColors = [];
for(let color of colors()) {
    myColors.push(color);
}

console.log(myColors);