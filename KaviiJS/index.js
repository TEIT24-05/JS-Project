let dispCount = document.getElementById("count")
let tcount = 0

let dispEntry = document.getElementById("entry")

function inc() {
    tcount += 1
    dispCount.textContent = tcount
}

function save() {
    dispEntry.textContent += tcount + "-"
    dispCount.textContent = 0
    tcount = 0
}

function dec() {
    tcount -= 1
    dispCount.textContent = tcount
}