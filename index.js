const countEl = document.getElementById('count-el')
const saveEl = document.getElementById('save-el')
let count = 0

function addRun(){
    count++
    countEl.textContent = count
}

function save(){
    const countStr = count + ' - '
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}