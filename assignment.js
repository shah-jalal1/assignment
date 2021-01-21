// PROBLEM 1
function kilometerToMeter(km){
    if(km < 0){
        return "Negative input is not acceceptable"
    }
    else{
        meter = 1000 * km;
        return meter;
    } 
}
var result1 = kilometerToMeter(5);
console.log("Result is:", result1);

