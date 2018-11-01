var	totalCostBurgerA = function(burgerCostA, burgerCountA){
  return burgerCostA * burgerCountA;
}

var	totalCostBurgerB = function(burgerCostB, burgerCountB){
  return burgerCostB * burgerCountB;
}

var	totalCostBurgerC = function(burgerCostC, burgerCountC){
  return burgerCostC * burgerCountC;
}

var totalCostBurgersAll = function(totalCostBurgerA, totalCostBurgerB, totalCostBurgerC) {
  return totalCostBurgerA + totalCostBurgerB + totalCostBurgerC;
}

function burgerAReceipt(burgerCountA) {
  if (burgerCountA > 0) {
    return true;
  }
  else {
    return false;
  }
}

function burgerBReceipt(burgerCountB) {
  if (burgerCountB > 0) {
    return true;
  }
  else {
    return false;
  }
}

function burgerCReceipt(burgerCountC) {
  if (burgerCountC > 0) {
    return true;
  }
  else {
    return false;
  }
}

// var	totalCostD = function(burgerCost, burgerCount){
//   return burgerCost * burgerCount;
// }
//
// var	totalCostF = function(burgerCost, burgerCount){
//   console.log(burgerCost, burgerCount);
//   return burgerCost * burgerCount;
// }


$(document).ready(function() {
  $("form#testForm").submit(function(event) {
    event.preventDefault();

		var burgerCostA = 2.99;
    var burgerCostB = 3.99;
    var burgerCostC = 5.99;
		var burgerCountA = parseInt($("#testInputA").val());
    var burgerCountB = parseInt($("#testInputB").val());
    var burgerCountC = parseInt($("#testInputC").val());
//    var preciseTotal = parseFloat(totalCost(burgerCost, burgerCount)).toFixed(2);
    var refinedCostBurger = parseFloat(totalCostBurgersAll(totalCostBurgerA(burgerCostA, burgerCountA), totalCostBurgerB(burgerCostB, burgerCountB), totalCostBurgerC(burgerCostC, burgerCountC))).toFixed(2);

    if (burgerAReceipt(burgerCountA) || burgerBReceipt(burgerCountB) || burgerCReceipt(burgerCountC)) {
      $("div#receiptOutput").before("<p>An Order has been placed at the restaurant successfully.  Here is your receipt:</p>");
    }
    if (burgerAReceipt(burgerCountA)) {
      $("ul#testOutput").append("<li>" + burgerCountA + " Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerA(burgerCostA, burgerCountA));
    }
    if (burgerBReceipt(burgerCountB)) {
      $("ul#testOutput").append("<li>" + burgerCountB + " Double Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerB(burgerCostB, burgerCountB));
    }
    if (burgerCReceipt(burgerCountC)) {
      $("ul#testOutput").append("<li>" + burgerCountC + " Deluxe Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerC(burgerCostC, burgerCountC));
    }
	});
});
