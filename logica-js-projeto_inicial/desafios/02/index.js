/**
Desafios
1- Pergunte ao usuário qual é o dia da semana. 
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".

let diaSemana = prompt('Qual é o dia da semana?');

if (diaSemana == 'sábado') {". 
Caso contrário, mostre "Tente novamente para ganhar.
  alert('Bom fim de semana');
} else if (diaSemana == 'domingo') {
  alert('Bom fim de semana');
} else {
  alert('Boa semana');
}


2- Verifique se um número digitado pelo usuário é positivo ou negativo.
Mostre um alerta informando.

let numeroDigitado = prompt('Digite um numero positivo ou negativo');

if (numeroDigitado > 0) {
  alert('Numero positivo');
} else {
  alert('Numero negativo');
}



3- Crie um sistema de pontuação para um jogo. 
Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".

let pontuacaoJogo = 200;

if (pontuacaoJogo >= 100) {
  alert('Parabéns, você venceu!');
} else {
  alerta('Tente novamente para ganhar.')
}


4- Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.

let saldoConta = 5000;
alert(`O Saldo em sua conta é ${saldoConta}`);


5- Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.

let saldoConta = 5000;
alert(`O Saldo em sua conta é ${saldoConta}`);

*/

let diaSemana = prompt('Qual é o dia da semana?');

if (diaSemana == 'sábado') {
  alert('Bom fim de semana');
} else if (diaSemana == 'domingo') {
  alert('Bom fim de semana');
} else {
  alert('Boa semana');
}

let numeroDigitado = prompt('Digite um número positivo ou negativo');

if (numeroDigitado > 0) {
  alert('Número positivo');
} else {
  alert('Número negativo');
}

let pontuacaoJogo = 200;

if (pontuacaoJogo >= 100) {
  alert('Parabéns, você venceu!');
} else {
  alerta('Tente novamente para ganhar.')
}

let saldoConta = 5000;
alert(`O Saldo em sua conta é ${saldoConta}`);

let name = prompt('Digite seu nome:');
alert(`Boas vindas seu nome é ${name}`);