import * as promptSync from 'prompt-sync'
var prompt = promptSync()

function exibirTabuada(n: number): void {
    for (let i = 1; i <= 10; i++) {
        const resultado = n * i;
        console.log(`${n} x ${i} = ${resultado}`);
    }
}
receberNumero();
function receberNumero(): void {
    const entrada = prompt("Digite um número para exibir a tabuada:");
    const numero = Number(entrada);
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        exibirTabuada(numero);
    }
}
