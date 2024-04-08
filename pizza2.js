//set up the timeouts on each function
function startPizza() {
  setTimeout(() => {
    console.log("Started preparing pizza");
  }, 500); //timeout sets a timer for when the function starts.
}

function theBase() {
    setTimeout(() => {
      console.log("Make the Base");
    }, 500)

}

function sauceCheese() {
    setTimeout(() => {
  console.log("The sauce and Cheese");
},500)
}

function pizzaToppings() {
    setTimeout(() => {
  console.log("The Pizza Toppings");
},500)
}

function cookPizza() {
    setTimeout(() => {
  console.log("cooking...");
},500)
}

function readyPizza() {
    setTimeout(() => {
  console.log("Le Pizza is ready");
}, 500)
}

startPizza()
theBase()
sauceCheese()
pizzaToppings()
cookPizza()
readyPizza()

