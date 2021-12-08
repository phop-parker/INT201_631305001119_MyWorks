const favfoodlist =  document.getElementById("favorFood")
const anotherList = document.createElement("li")
anotherList.textContent="French fries"
favfoodlist.appendChild(anotherList)


alert("your favorite food is : "+favfoodlist.firstElementChild.innerHTML)
alert("your favorite food is : "+favfoodlist.children[1].innerHTML)

 