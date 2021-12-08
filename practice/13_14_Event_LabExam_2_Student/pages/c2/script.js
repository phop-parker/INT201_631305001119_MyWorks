/*user test state
 * problems - a list of problems
 * correctAnswers -  the number of user's correct answers
 * currentQuestion - a display question
 * userAnswers - a list of user answers
 */

let userState = {
  problems: [],
  correctAnswers: 0,
  currentQuestion: 0,
  userAnswers: [],
};

//random a number in the range min to mix
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate a math problem and set correct answer
function generateProblemAnswer() {
  let tmp = {
    operand1: randomNumber(1, 10),
    operand2: randomNumber(1, 10),
    operator: ["+", "-", "*"][randomNumber(0, 2)],
  };
  
//set problem to prob object
let prob = {question: tmp.operand1 + tmp.operator + tmp.operand2 };

  //set answer to prob object
  switch (tmp.operator) {
    case "+":
      prob.answer = tmp.operand1 + tmp.operand2;
      break;
    case "-":
      prob.answer = tmp.operand1 - tmp.operand2;
      break;
    case "*":
      prob.answer = tmp.operand1 * tmp.operand2;
      break;
  }
  
  // console.log(`prob: ${prob}`);
  return prob;
}

//add each problem to problems array
function generateProblems(question) {
  for (let i = 0; i < question; i++) {
    userState.problems[i] = generateProblemAnswer();
  }
}

//display the problem at the specified index 
function showQuestion(questIndex) {


  if(questIndex==userState.problems.length){
    checkAnswer()
    alert("your score is "+userState.correctAnswers)
  } else {
  const problemLabel = document.getElementById("quest");
  problemLabel.innerHTML = `${userState.problems[questIndex].question} = `;
  }
}

let numOfQuestions = prompt("Enter the number of Math questions generated");
generateProblems(numOfQuestions);

showQuestion(userState.currentQuestion);

console.log(userState.problems)

const ans = document.getElementById("ans");
const nextBtn = document.getElementById("next");



nextBtn.addEventListener('click',(e)=>{
let answer = Number(ans.value);


if(isNaN(answer)){
  answer=0;
  userState.userAnswers.push(answer)
  userState.userAnswers.push(answer)
} else {
  userState.userAnswers.push(answer)
}
console.log(userState.userAnswers)
console.log("-------------------")

userState.currentQuestion++;

if(userState.currentQuestion<=userState.problems.length){
ans.value='';
}
showQuestion(userState.currentQuestion)
console.log("number "+userState.currentQuestion)
});

function checkAnswer(){
  for(let i = 0;i < userState.userAnswers.length;i++){
    console.log("this is i = "+i)
    console.log("answer = "+userState.problems[i].answer)
    console.log("userAnswers = "+userState.userAnswers[i])
    if(userState.problems[i].answer==userState.userAnswers[i]){
      userState.correctAnswers = userState.correctAnswers+1;
      console.log("--------correct answer-------")
      console.log(userState.correctAnswers)
    }else{
      console.log("--------incorrect answer-------")
      console.log(userState.correctAnswers)
    }
  }
 
}
