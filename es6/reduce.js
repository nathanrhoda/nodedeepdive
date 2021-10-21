//reduce => using a running total it checks a conditiona and reduces it to one value ie. summing or boolean

var numbers = [10, 20, 30];
var sum = 0;

for (var i=0; i<numbers.length; i++) {
    sum += numbers[i];
}

numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);


var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

let g = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);

    return previous;
}, []);

console.log(g);