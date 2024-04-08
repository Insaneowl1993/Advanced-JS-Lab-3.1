//Make 6 functions 
function startPizza() {
    console.log('Started preparing pizza') //function declaration
}

const theBase = function (){
    console.log('Make the Base') //function expression 
}


const sauceCheese = () => {
    console.log('The sauce and Cheese') //arrow function
}


const pizzaToppings = () => console.log('The Pizza Toppings') // single line arrow function



function cookPizza() {
    console.log('cooking...')
}


function readyPizza(){
    console.log('Le Pizza is ready')
}

startPizza()
theBase()
sauceCheese()
pizzaToppings()
cookPizza()
readyPizza()