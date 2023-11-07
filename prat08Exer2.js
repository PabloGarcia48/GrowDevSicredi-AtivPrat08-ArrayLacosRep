let numeros = [3, 36, 40, 58, 62, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let soma = 0

for (let numero of numeros) {
    soma = soma + numero
}

document.write(`O vetor de ${numeros.length} números é: [${numeros}]<br>`)
document.write(`A soma dos números é: ${soma}`)