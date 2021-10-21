// simplified for loop

var colors = [ 'red', 'blue', 'green'];

// Basic For
for (var i= 0; i<colors.length; i++) {
	console.log(colors[i]);
}


// Foreach with embedded method
colors.forEach(function(color){
	console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;

function adder(number) {
	sum += number
}


// Foreach with function
numbers.forEach(adder);

console.log(sum);