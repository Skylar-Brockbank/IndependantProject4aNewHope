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