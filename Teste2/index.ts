import * as promptSync from 'prompt-sync'
var prompt = promptSync()

exibirSoma();
function calculaSoma(): void {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    console.log(`Somando ${i}: a soma atual é ${soma}`);
    }
    console.log(`A soma total dos números de 1 a 100 é: ${soma}`);
}
function exibirSoma(): void {
    const resultado = calculaSoma();
}


