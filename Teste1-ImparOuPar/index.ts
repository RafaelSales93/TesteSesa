import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function PaRouImpar(numero: number): string {
    const parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    const positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';
    return `O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`;
  }
 
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
  receberNumero();