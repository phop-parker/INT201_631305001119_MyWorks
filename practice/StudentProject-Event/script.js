
let quotes = [
  "Do Your Best and Keep Going",
  "Do not Give up",
  "Everyone makes mistake, This Is How You Can Love and Forgive Yourself",
];

window.addEventListener('load', (event) => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  console.log(randomNum)
  alert(quotes[randomNum])
})

// window.onload = (event) => {
//   let randomNum = Math.floor(Math.random() * quotes.length);
//   alert = (quotes[randomNum])
// }


const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const divContent = document.getElementById("bgChanged")

redBtn.addEventListener("click", event => {
  divContent.style.backgroundColor = 'red'
});

blueBtn.addEventListener("click", event => {
  divContent.style.backgroundColor = 'blue'
});

greenBtn.addEventListener("click", event => {
  divContent.style.backgroundColor = 'green'
});