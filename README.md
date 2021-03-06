# _Pizza Parlor_

#### By _**Skylar Brockbank**_

#### _This is the Intermediate Javascript week 1 independant project_

## Technologies Used

* _HTML_
* _CSS(Bootstrap)_
* _Javascript_
* _Git_

## Description

_Placeholder_

## Setup/Installation Requirements

* _Click the green "Code" button and Download Zip _
* _Extract the contents of the zip file to a folder on your machine_
* _Run the Index.html file with your browser of choice (I recommend Chrome)_

* _alternatively you can [clone this repository](https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories) from Git Hub_


## Known Bugs

* _No Known bugs_

## License

*[MIT](https://opensource.org/licenses/MIT) Licenced
*Copyright (c) _2021_ _Skylar Brockbank_

## Tests

```
Describe: Pizza()
Test: It should return an object with properties named: Size, and Toppings
Code: pizza1 = new Pizza();
      console.log(pizza1)
Expected Output: {size: Array, toppings: Array}

Describe: Pizza.prototype.setSize(size)
Test: It should overwrite the current value of the size property with the size specified in the size parameter.
Code: pizza1.setSize(0);
      console.log(pizza1.size);
Expected Output: 0

Describe: Pizza.prototype.addTopping(toppingData)
Test: It should add an array to the toppings property of the pizza object
Code: pizza1.addTopping(["Pepperoni", 1.5]);
      console.log(pizza1);
Expected Output: {size: '', toppings: Array(1)}

Describe: Pizza.prototype.GetPrice();
Test: It should return the sum of all the 1 idicies of all of the arrays in pizza.toppings plus the pizza dough constant times the size.
Code: pizza1 = new Pizza();
      pizza1.setSize(0);
      pizza1.addTopping(["Pepperoni", 1.5]);
      console.log(pizza1.getPrice());
Expected Output: 2.5

Describe: Pizza.prototype.removeTopping()
Test: It should remove a topping from the list of toppings
Code: pizza1.addTopping(["Sauasage", 1.5]);
      pizza1.addTopping(["Pepperoni", 1.5]);
      pizza1.removeTopping("pepperoni");
      pizza1.toppings.forEach(function(topping) {
        console.log(topping[0]);
      })
Expected Output: "Sausage"
```



<!-- Describe:
Test:
Code:
Expected Output: -->