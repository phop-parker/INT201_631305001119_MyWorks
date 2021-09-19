let Round = 5;
let player1 = {name: "Jajah", roll: [], result: [] };
let player2 = {name: "Phop", roll: [], result: [] };
let count = 0;
let dice = {roll:function(){return Math.floor(Math.random() * 6) + 1}}  
function dicegame(roll1,roll2){
    if(roll1 > roll2){
        player1.result[count] = "WIN";
        player2.result[count] = "LOSE";
    }
    else if(roll1 < roll2){
        player1.result[count] = "LOSE";
        player2.result[count] = "WIN";
    }
    else{
        player1.result[count] = "DRAW";
        player2.result[count] = "DRAW";
    }
    player1.roll[count] = roll1;
    player2.roll[count] = roll2;
    count++;
}
    while (Round > 0){
        Round--;
        dicegame(dice.roll(),dice.roll());
    }
console.log(player2);
console.log(player1);