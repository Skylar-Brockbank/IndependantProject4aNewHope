function Pizza(){
  this.size = '';
  this.toppings = [];
}

Pizza.prototype.addToppings = function(toppingData) {
  this.toppings.push(toppingData);
}