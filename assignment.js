// PROBLEM 1
function kilometerToMeter(km) {
    if (km < 0) {
        return "Negative input is not acceceptable";
    }
    else {
        meter = 1000 * km;
        return meter;
    }
}
var result1 = kilometerToMeter(5);
console.log("Result is:", result1);



// PROBLEM 1
function budgetCalculator(watch, phone, laptop) {
    if(watch < 0 || phone < 0 || laptop < 0){
        return "Negative input is not acceceptable";
    }
    else {
        watchPrice = 50 * watch;
        phonePrice = 100 * phone;
        laptopPrice = 500 * laptop;
        totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget
    }
}
var budget = budgetCalculator(2, 2, 2);
console.log("Total budget:", budget);
