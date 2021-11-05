universalPizzaConstant = 1;
universalToppingPriceDatabase = {
  pepperoni:1.0,
  sausage:1.0,
  chorizo:1.2,
  canadian_bacon:1.0,
  anchovies:1.0,
  steak:1.3,
  black_olives:0.5,
  mushrooms:0.5,
  green_pepers:0.75,
  onion:0.5,
  fresh_tomato:0.75,
  pineapple:1,
  potato:.5,
  squash:1,
  bananna_peppers:.5
}

function Pizza(){
  this.size = '';
  this.toppings = [];
}

Pizza.prototype.addTopping = function(toppingData) {
  this.toppings.push(toppingData);
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
}

Pizza.prototype.getPrice = function(){
  let output = 0;
  for(let i=0; i < this.toppings.length; i++){
    output += parseFloat(this.toppings[i][1]);
  }
  output = (output+universalPizzaConstant)*(parseInt(this.size)+1);
  return output;
}