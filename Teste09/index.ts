import * as promptSync from 'prompt-sync'
var prompt = promptSync()

function printar() {
    let denominador = 1;
    let numerador = 38;
  
    let acumuladorSoma = 0;
  
    while (denominador < 38) {   
       console.log('denominador',denominador); 
      console.log('numerador',numerador); 
      console.log('numerador -1 ',numerador -1 ); 
      acumuladorSoma += (numerador * (numerador - 1)) / denominador;
  
      denominador++;
      numerador--;
    }
    console.log(acumuladorSoma);
  }
  
  printar();
  