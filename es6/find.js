// find => returns 1 items if condition is met in arrau

var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},
];

var user;

for (var i=0; i<users.length; i++){
    if(users[i].name === 'Alex') {
        user  = users[i];
    }
}

console.log(user);

var user2 = users.find(function (item){
    return item.name === 'Alex';
})

console.log(user2);

function Car(model){
    this.model = model;
}

var cars = [
    new Car
]