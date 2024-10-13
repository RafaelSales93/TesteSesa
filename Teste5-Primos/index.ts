import * as promptSync from 'prompt-sync'
var prompt = promptSync()

function ehPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function exibirPrimos(inicio: number, fim: number): void {
    console.log(`Números primos entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            console.log(i);
        }
    }
}
receberIntervalo();
function receberIntervalo(): void {
    const entradaInicio = prompt("Digite o início do intervalo:");
    const entradaFim = prompt("Digite o fim do intervalo:");
    const inicio = Number(entradaInicio);
    const fim = Number(entradaFim);
    exibirPrimos(inicio, fim);
}


