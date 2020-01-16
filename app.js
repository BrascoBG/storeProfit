function profitEur([a,b,c,d]){
  kgPriceVeggie = parseFloat(a);
  kgPriceFruit = parseFloat(b);
  veggieKg = parseInt(c);
  fruitLg = parseInt(d);
  profitVeggie = a * c;
  profitFruit = b * d;
  profit = profitVeggie + profitFruit
  console.log("Your total turnover is " + profit / 1.94 + " EUR");
}

profitEur([0.194,19.4,10,10]);
