import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function PaRouImpar(numero: number): string {
    const parOuImpar = numero % 2 === 0 ? 'Par' : 'Impar';
    const positivoOuNegativo = numero >= 0 ? 'Positivo' : 'Negativo';
    return `O Número ${numero} é ${parOuImpar} é ${positivoOuNegativo}.`;
  }
  receberNumero();
  function receberNumero(): void {
    const entrada = prompt("Digite um número:");
    const numero = Number(entrada);
    if (isNaN(numero)) {
      console.log("Por favor, insira um número válido.");
    } else {
      const resultado = PaRouImpar(numero);
      console.log(resultado);
    }
  }