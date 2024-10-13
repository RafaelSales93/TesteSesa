import * as promptSync from 'prompt-sync';
const prompt = promptSync();

function verificarTriangulo(a: number, b: number, c: number): string {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Os valores fornecidos não formam um triângulo.";
    }
}
receberLadosTriangulo();
function receberLadosTriangulo(): void {
    const entradaA = prompt("Digite o primeiro lado do triângulo:");
    const entradaB = prompt("Digite o segundo lado do triângulo:");
    const entradaC = prompt("Digite o terceiro lado do triângulo:");
    const a = Number(entradaA);
    const b = Number(entradaB);
    const c = Number(entradaC);
    
    const resultado = verificarTriangulo(a, b, c);
    console.log(resultado);
}