/**

Desafios
Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

 */

function exibirOla() {
  console.log("Olá, Mundo!");
};
exibirOla();

function exibirOlaName(name) {
  console.log(`Olá, ${name}`);
};
exibirOlaName('Marcus');

function calcularDobro(num) {
  return num * 2;
};
let resultadoDobrado = calcularDobro(2);
console.log(resultadoDobrado);

function calcularMedia(a, b, c) {
  return (a + b + b)/3;
};
let media = calcularMedia(3, 5, 15);
console.log(media);

function encontrarMaiorNumero(a, b){
  return a > b ? a : b;
};
let 
