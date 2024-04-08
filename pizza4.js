//Async functions
async function startPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Started preparing pizza");
            resolve()
          }, 500);
    })
  }
  
  async function theBase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Make the Base");
        resolve()
      }, 500);
    })
  }
  
  async function sauceCheese() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The sauce and cheese");
        resolve()
      }, 500);
    })
  }
  
  async function pizzaToppings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The Pizza Toppings");
        resolve()
      }, 500);
    })
  }
  
  async function cookPizza() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("cooking...");
        resolve()
      }, 500);
    })
  }
  
  async function readyPizza() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Le Pizza is ready.");
        resolve()
      }, 500);
    })
  }
  
  async function lePizza() {
    await startPizza()
    await theBase() 
    await sauceCheese()
    await pizzaToppings()
    await cookPizza()
    await readyPizza()
  } //await calls each function after the previous function

  lePizza()