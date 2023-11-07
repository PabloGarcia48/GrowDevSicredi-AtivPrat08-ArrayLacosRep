let numerosPerfeitos = []
let numero = 9000
let soma = 0
let contagem = 0
let parada = 4

    for (let i = 1; i < numero; i++) {
        for (let j = 1; j < numero; j++) {
            if (i % j === 0 && i !== j) {
                soma += j
            }        
        }
          
        if (soma === i && contagem <= parada - 1) {
            numerosPerfeitos.push(i)
            contagem += 1
        }
        soma = 0
    }

document.write(`Os ${contagem} primeiros números perfeitos são : [${numerosPerfeitos}]<br>`)

// Este código fuciona até quatro números perfeitos