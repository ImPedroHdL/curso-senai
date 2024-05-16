let tMin = []
let tMax = []
let media = []
let min = 15
let max = 35
let q = 0
let f = 0
let saida = document.getElementById('divSaida')


for (i = 0; i < 30; i++) {
    f = Math.floor(Math.random() * (max - min + 1)) + min
    q = Math.floor(Math.random() * (max - min + 1)) + min
    if (q > f) {
        tMax.push(q)
        tMin.push(f)
    } else {
        tMin.push(q)
        tMax.push(f)
    }
}

console.log(`Min ${tMin}`)
console.log(`Max ${tMax}`)

for (i = 0; i < 30; i++) {
    console.log(`Max: ${tMax[i]} -- Min:  ${tMin[i]} \n`)
}