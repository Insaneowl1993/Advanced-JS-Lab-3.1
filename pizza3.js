//Promises, promises
function startPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Started preparing pizza");
            resolve()
          }, 500);
    }) //promises are used to resolve the function
  }
  
  function theBase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Make the Base");
            resolve()
          }, 500);
    })
  }
  
  function sauceCheese() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("The Sauce and Cheese");
            resolve()
          }, 500);
    })
  }
  function pizzaToppings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("The Pizza toppings");
            resolve()
          }, 500);
    })
  }
  function cookPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cooking...");
            resolve()
          }, 500);
    })
  }
  
  function readyPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Le Pizza is ready.");
            resolve()
          }, 500);
    })
  }
  
  startPizza()
  theBase()
  sauceCheese()
  pizzaToppings()
  cookPizza()
  readyPizza()