var expense = {
    type: 'Business',
    amount: '$45 USD'
};

// ES5

// var type = expense.type;
// var amount = expense.amount;



// ES 6
const { type } = expense;
const { amount } = expense;


const { type, amount } = expense;



