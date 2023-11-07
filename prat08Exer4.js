let numbers = [];

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    numbers.push(randomNumber);
}

document.write(`Números gerados: ${numbers}<br>`);

let userNumber = Number(prompt("Digite um número (entre 0 e 99) para testar sua sorte."))

document.write(`Número digitado: ${userNumber}<br><br>`);

if (numbers.includes(userNumber)) {
    document.write("Você acertou! Parabéns!")
} else {
    document.write("Você errou!")
}