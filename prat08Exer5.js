/*
5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.
Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/
let names = []

for (let i = 0; i < 5; i++) {
    let nome = (prompt(`Digite o ${i + 1}º nome`))
    names.push(nome)
}

document.write(`Nomes na ordem digitada: ${names}<br>`)
document.write(`Nomes na ordem invertida a digitada: ${names.reverse()}`)







/*
const nomes = ["Pablo", "Sheila", "Mariana", "Sueli", "Paulo"]
let index = 0

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    index++
    document.write(`${index}. ${nome}<br>`)
}

*/