const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let evenNumbers = []
let oddNumbers = []

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num %2 === 0) {
        evenNumbers.push(num)
    } else {
        oddNumbers.push(num)
    }
}

document.write(`Numeros pares: [${evenNumbers}]<br>`)
document.write(`Numeros ímpares: [${oddNumbers}]`)