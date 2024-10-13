import * as promptSync from 'prompt-sync'
var prompt = promptSync()

type Pessoa = {
    altura: number;
    sexo: 'M' | 'F';
};

function processarDados(pessoas: Pessoa[]): void {
    let maiorAltura = -Infinity;
    let menorAltura = Infinity;
    let somaAlturaMulheres = 0;
    let quantidadeMulheres = 0;
    let quantidadeHomens = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
        if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;
        if (pessoa.sexo === 'F') {
            somaAlturaMulheres += pessoa.altura;
            quantidadeMulheres++;
        } else if (pessoa.sexo === 'M') {
            quantidadeHomens++;
        }
    });
    
    const mediaAlturaMulheres = quantidadeMulheres > 0 ? somaAlturaMulheres / quantidadeMulheres : 0;
    const totalPessoas = pessoas.length;
    const porcentagemHomens = (quantidadeHomens / totalPessoas) * 100;
    const porcentagemMulheres = (quantidadeMulheres / totalPessoas) * 100;

    console.log(`Maior altura: ${maiorAltura} cm`);
    console.log(`Menor altura: ${menorAltura} cm`);
    console.log(`Média de altura das mulheres: ${mediaAlturaMulheres.toFixed(2)} cm`);
    console.log(`Número de Homens: ${quantidadeHomens}`);
    console.log(`Número de Mulheres: ${quantidadeMulheres}`);
    console.log(`Porcentagem de homens: ${porcentagemHomens.toFixed(2)}%`);
    console.log(`Porcentagem de mulheres: ${porcentagemMulheres.toFixed(2)}%`);
}
const pessoas: Pessoa[] = [
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
];
processarDados(pessoas);
