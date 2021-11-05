universalPizzaConstant = 1;

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