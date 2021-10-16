
/*
Intialize the count as 0 
listen for clicks on the increment btn
increment the value when btn is clicked
change the count-el in html to reflect new value
*/

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}