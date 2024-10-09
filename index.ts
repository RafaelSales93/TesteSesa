import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function PaRouImpar(numero: number): string {
    // Verifica se o número é par ou ímpar
    const parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    
    // Verifica se o número é positivo ou negativo
    const positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';
    
    // Retorna o resultado
    return `O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`;
  }
  // Função para receber entrada do usuário
  function receberNumero(): void {
    const entrada = prompt("Digite um número:"); // Recebe a entrada do usuário
    const numero = Number(entrada); // Converte a entrada para número
    if (isNaN(numero)) {
      console.log("Por favor, insira um número válido.");
    } else {
      const resultado = PaRouImpar(numero);
      console.log(resultado);
    }
  }
  
  // Chama a função para iniciar o processo
  receberNumero();