
function randomNumber() {
    return Math.floor((Math.random() * 100)+1)
}//random number function by using Mathe.random

let num1 = randomNumber();//assigned random value to num1
let num2 = randomNumber();//assigned random value to num2
let num3 = randomNumber();//assigned random value to num3

console.log(`${num1},${num2},${num3}`)
//log all of the 3 numbers to cosole

function findSum(){
    return num1+num2+num3;
};//return the total sum of 3 random number by using 

function findMin(){
    return Math.min(num1,num2,num3);
};//return minimum value of 3 numbers by using Math.min

function findMax(){
    return Math.max(num1,num2,num3);
};//return maximum value of 3 numbers by using Math.max

let menu = 4;
switch(menu){
    case 1 :console.log(findSum());
        break;
    case 2 :console.log(findMin());
        break;
    case 3 :console.log(findMax());
         break;
    default: console.log('Enter 1 to 3 only!!')
        break;
}
//using switch case for process in each menu
//case 1 will call function findsum()
//case 2 will call function findMin()
//case 3 will call function findMax()
//default will call when the number not match any case
