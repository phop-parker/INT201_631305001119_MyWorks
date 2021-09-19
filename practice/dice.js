
let player1 = {}; //ประกาศตัวแปร player1 เป็น object สำหรับเก็บข้อมูล ชื่อ,ค่าเลขที่ได้ในแต่ละครัง,ผลของเกมแต่ละรอบ
let player2 = {}; //ประกาศตัวแปร player2 เป็น object สำหรับเก็บข้อมูล ชื่อ,ค่าเลขที่ได้ในแต่ละครัง,ผลของเกมแต่ละรอบ
let playerResult = { player1, player2 } //playerResult เป็น object เก๋บข้อมูลของผู้เล่นทั้งสองคน
let gameRound; //ตัวแปรสำหรับบันทึกตาในแต่ละรอบที่จะเล่น
let player1win = 0; //ตัวแปรสำหรับบันทึกอัตราชนะของผู้เล่นที่ 1 โดยทุกการชนะจะบวกขึ้นไป 1แต้ม เริ่มจาก 0
let player2win = 0; //ตัวแปรสำหรับบันทึกอัตราชนะของผู้เล่นที่ 2 โดยทุกการชนะจะบวกขึ้นไป 1แต้ม เริ่มจาก 0

function randomDice() {
    return Math.floor((Math.random() * 6) + 1);
} // function andomDice() สำหรับการสุ่มเลขลูกเต๋า 6 หมายเลขด้วยคำสั่ง Math.random

function setUpPlayer(name1, name2) {
    player1 = { name: name1, disceResult: [], gameResult: [] };
    player2 = { name: name2, disceResult: [], gameResult: [] };
    playerResult = { player1, player2 }
    return playerResult;
}
// function setUpPlayer(name1,name2) สำหรับกาป้อนชื่อผู้เล่นทั้ง 2คน เมื่อป้อนเสร็จโปรแกรมจะคืนค่า ผู้เล่นทั้งสองออกมาผ่านตัวแปร playerResult
// ภายในobject player1 และ player2 นอกจากมี name ที่เก็บชื่อผู้เล่นแต่ละคนแล้ว จะมี array ของ disceResult เก็บค่าเลขที่ได้ในแต่ละครัง และ gameResult เก็บผลของเกมแต่ละรอบ

function setRound(round) {
    gameRound = round;
    return gameRound;
}
// function setRound(round) จะเป็นการส่งจำนวนตาที่จะเล่นเข้ามา ผ่านพารามิเตอร์ ชื่อ round และนำค่านั้นส่งต่อไปที่ gameRound


//function startGame() เป็นฟังก์ชันที่จะเริ่มให้เกมดำเนินการ
function startGame() {
    for (let i = 0; i < gameRound; i++) {
        player1.disceResult.push(randomDice());
        player2.disceResult.push(randomDice());
    }
    //ภายใน loop นี้จะเป็นกาสุ่มตัวเลขลูกเต็าลงไปใน array diceResult ภายในobject player1 และ  player2
    //ใช้คำสั่ง push ในการเพิ่มเลขลูกเต๋าที่ได้เข้าไปใน array โดยคำสั่ง push จะเป็นการเพิ่มข้อมูลไปที่ตัวสุดท้ายของ array
    //loop จะทำงานจนกว่าจะทำงานตั้งแต่ 0 จนกว่าจะมีค่าน้อยกว่า gameRound

    for (let i = 0; i < gameRound; i++) {

        if (player1.disceResult[i] < player2.disceResult[i]) {
            player1.gameResult.push("LOOSE");
            player2.gameResult.push("WIN");
            player2win = player2win + 1;
        } else if (player1.disceResult[i] > player2.disceResult[i]) {
            player1.gameResult.push("WIN");
            player2.gameResult.push("LOOSE");
            player1win = player1win + 1;
        } else {
            player1.gameResult.push("DRAW");
            player2.gameResult.push("DRAW");
        }
    }
    //loop ข้างต้นจะเป็นการตรวจผล แพ้ ชนะ และ เสมอ
    //โดยที่จะตรวจสอบในแต่ละตำแหน่งของอาเรย์ disceResult ภายในobject player
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก น้อยกว่าผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น LOOSE ผู้เล่นสองมีผลเป็น WIN
    //ในเงื่อนไขนี้จะมี player2win updateค่า เพิ่มขึ้นทีละ 1 หาก ผู้เล่นที่สองมีผลเป็น WIN
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก มากกว่าผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น WIN ผู้เล่นสองมีผลเป็น WIN
    //ในเงื่อนไขนี้จะมี player1win updateค่า เพิ่มขึ้นทีละ 1 หาก ผู้เล่นที่หนึ่งมีผลเป็น WIN
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก เท่ากับผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น DRAW ผู้เล่นสองมีผลเป็น DRAW
    //โดย ผลของเกมแต่ละรอบ จะถูกบันทึกใน gameResult ภายในobject player1และplayer2 ผ่านคำสั่ง push
    return playerResult
    //เมื่อจบการทำงานทุกส่วนเสร็จแล้ว โปรแกรมจะreturn playerResultออกมา
}

function whoWins() {
    if (player1win > player2win) {
        return player1.name + ' win!!';
    } else if (player2win > player1win) {
        return player2.name + ' win!!';
    } else {
        return player1.name + ' Draw ' + player2.name;
    }
}
//function whoWins() เป็นฟังก์ชันที่จะสตรวจสอบว่า เมื่อเกมส์จบใตนจะเป็นผู้ชนะ
//โดยเปรียนเทียบจาก player1win และ player2 win ถ้าตัวแปรกไหนมีค่ามากกว่า
//player นั้นจะเผ็นผู้ชนะ และ return ' ชื่อผู้ชนะ win!!' ถ้าหารเสมอจะ return draw

//ทดสอบ โปรแกรม
setUpPlayer('name1', 'name2')
setRound(3)
console.log(startGame())
console.log(whoWins())




