import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function PaRouImpar(numero: number): string {
    const parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    const positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';

    return `O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`;
  }
 receberNumero();
  function receberNumero(): void {
    const entrada = prompt("Digite um número:"); 
    const numero = Number(entrada);
    } else {
      const resultado = PaRouImpar(numero);
      console.log(resultado);
    }
  }
