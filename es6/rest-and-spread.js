function addNumbers(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

//console.log(addNumbers(1,2,3,4));

var arr1 = [1,2];
var arr2 = [3,4];
console.log([0, ...arr1, ...arr2]);
