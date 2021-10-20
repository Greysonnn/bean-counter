/*
Intialize the count as 0 
listen for clicks on the increment btn
increment the value when btn is clicked
change the count-el in html to reflect new value
*/

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let savedEntry = count + ' - '
    saveEl.textContent += savedEntry
    console.log(count)
}
