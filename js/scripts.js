universalPizzaConstant = 5;
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

//UI Utilities
function subtractFromSelectBox(name){
  $("#"+name).remove();
}
function addToSelectBox(name, cost){
  $("#topping").append("<option id='"+ name +"' value='"+ name + "," + cost +"'>"+ name +"</option>");
}
function loadToppingList(){
  for(let i in universalToppingPriceDatabase){
    addToSelectBox(i,universalToppingPriceDatabase[i]);
  }
}
function updateMods(pizza){
  let output = '';
  for(let i=0; i < pizza.toppings.length; i++){
    output = output + "<li value='"+pizza.toppings[i][0]+"' id='list" + pizza.toppings[i][0] + "'><span class='delete' value='"+pizza.toppings[i][0]+"'> </span>" + pizza.toppings[i][0] + "</li>"
  }
  $("#modifications").html(output);
}
//UI logic

$(document).ready(function(){
  loadToppingList();
  let pizza1 = new Pizza();
    pizza1.setSize(0);
  $("#cost").text(parseFloat(pizza1.getPrice())+".00");
  $("#form1").submit(function(event){
    event.preventDefault();
    let data = $("#topping").val().split(",");
    data[1] = parseFloat(data[1]);
    //add the topping to the pizza
    pizza1.addTopping(data);
    subtractFromSelectBox(data[0]);
    updateMods(pizza1);
    $("#cost").text(pizza1.getPrice().toFixed(2));
  });
  $("#form2").click(function(){
    pizza1.setSize(parseInt($("input:radio[name=pizzaSize]:checked").val()));
    $("#cost").text(pizza1.getPrice().toFixed(2));
  });
});


//business objects
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

Pizza.prototype.removeTopping = function(toppingName){
  for(let i=0; i<this.toppings.length;i++){
    if(this.toppings[i][0]===toppingName){
      this.toppings.splice(i,1);
      break;
    }
  }
}