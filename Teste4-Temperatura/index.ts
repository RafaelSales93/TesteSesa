import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function converterTemperatura(fahrenheit: number): string {
    const celsius = (5 * (fahrenheit - 32)) / 9;
    return `A temperatura em Fahrenheit é ${fahrenheit}°F e em Celsius é ${celsius.toFixed(2)}°C.`;
}
receberTemperatura();
function receberTemperatura(): void {
    const entrada = prompt("Digite uma temperatura em Fahrenheit:");
    const fahrenheit = Number(entrada);
    const resultado = converterTemperatura(fahrenheit);
        console.log(resultado);
 }

