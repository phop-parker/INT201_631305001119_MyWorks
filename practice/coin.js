// var calculateChange = 
function calculateChange (price, cash) {
    //function
    var returnValue = cash - price;
    //สร้าง object
    var change = {};

    const monetTypes = ["bank500", "bank100", "bank50", "bank20", "bank10", "coin5", "coin2", "coin1"  ]
    const moneyValues = [500, 100, 50, 20, 10, 5, 2, 1];

    var amount;

    for (var i = 0; i < moneyValues.length; i++){

        amount = Math.floor(returnValue/moneyValues[i]);
        if(amount > 0){
            change[monetTypes[i]] = amount;
            returnValue = returnValue%moneyValues[i]
        }
    }


    return change;
}

console.log(calculateChange(1700, 2000));
console.log(calculateChange(3950, 4000));
console.log(calculateChange(501, 1000));