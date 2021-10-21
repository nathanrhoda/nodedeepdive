const add = function(a, b) {
    return a+b;
}



const add1 = (a,b) => {
    return a+b;
}

const add2 = (a,b) => a + b;


const double = function(number) {
    return 2 * number;
}

const double2 = (number) => 2 * number;

const double3 = number => 2 * number;

const numbers3 = [1,2,3];
numbers3.map(function(number) {
    return 2 * number;
})

numbers3.map(number => 2 * number);

// const team = {
//   members: ['Jane', 'Bill'],
//   teamName: 'Super Squad',
//   teamSummary: function() {      
//       return this.members.map(function(member){
//         return `${member} is on team ${this.teamName}`;
//       }.bind(this));
//   }
// };

// const team = {
//     members: ['Jane', 'Bill'],
//     teamName: 'Super Squad',
//     teamSummary: function() {      
//         var self = this;
//         return this.members.map(function(member){
//           return `${member} is on team ${self.teamName}`;
//         });
//     }
//   };

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {          
        return this.members.map((member) =>{
          return `${member} is on team ${this.teamName}`;
        });
    }
  };

console.log(team.teamSummary());