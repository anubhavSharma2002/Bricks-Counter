let count = 0
let savecount
// console.log(count)

let countEl = document.getElementById("count-el")
console.log(countEl)
let totalCount = 0

function increment()
{
    count += 1
    countEl.innerText = count
}

function save()
{
    savecount = count
    let messEl = document.getElementById("mess-el")
    let totalel = document.getElementById("total-el")
    messEl.innerText = "Previou Enteries" + "-" + savecount
    totalCount += count
    console.log(totalCount)
    totalel.innerText = "Total Count" + "-" + totalCount
    countEl.innerText = 0
    count = 0
}
