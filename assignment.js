// https://github.com/shah-jalal1/assignment

// PROBLEM 1
function kilometerToMeter(km) {
    if (km < 0) {
        return "Negative input is not acceceptable";
    }
    else {
        // 1km = 1000m
        meter = 1000 * km;
        return meter;
    }
}
var result1 = kilometerToMeter(5);
console.log("Meter:", result1);



// PROBLEM 1
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative input is not acceceptable";
    }
    else {
        watchPrice = 50 * watch;
        phonePrice = 100 * phone;
        laptopPrice = 500 * laptop;
        totalBudget = watchPrice + phonePrice + laptopPrice;
    }
    return totalBudget
}
var budget = budgetCalculator(2, 2, 2);
console.log("Total budget:", budget);



// PROBLEM 2
function hotelCost(day) {
    var totalCost = 0;
    if (day == 0) {
        return "0 is not acceceptable";
    }
    else if (day < 0) {
        return "Negative input is not acceceptable";
    }
    else if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}
var costResutlt = hotelCost(22);
console.log("Total hotel cost:", costResutlt);



// PROBLEM 3
function megaFriend(names) {
    var max = 0;
    var megaFriend;
    for (var i = 0; i < names.length; i++) {
        // checking it is string or not
        if (isNaN(names[i])) {
            if (names[i].length > max) {
                var max = names[i].length;
                megaFriend = names[i];
            }
            
        }
        else{
            return "Number is not acceceptable";
        }
    }
    return megaFriend;
}

var result2 = megaFriend(['zawad', 'sakib', 'mushfiqur rahim', 'Mahmudullah']);
console.log("Mege Friend:", result2);