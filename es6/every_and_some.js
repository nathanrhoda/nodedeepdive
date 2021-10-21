// Every => returns a bool  true if all  item in array satifies  condition
// Some => returns a bool true if any one item in array satifies condition

var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 16},
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i=0; i<computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log("All: " + allComputersCanRunProgram);
console.log("Only Some: " + onlySomeComputersCanRunProgram);


var isAll = computers.every(function (computer){
    return computer.ram > 16;
});
console.log(isAll);

var isSome = computers.some(function (computer){
    return computer.ram > 16;
});
console.log(isSome);