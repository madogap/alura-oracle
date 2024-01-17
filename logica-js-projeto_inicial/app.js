
/*
let numeroSecreto = 5;
console.log(numeroSecret);
alert('Boas-vindas ao jogo do Número Secreto');

let chute = prompt('Escolha um número entre 1 e 10');
console.log(chute);
console.log(chute == numeroSecreto);
if (numeroSecreto == chute) {
  alert('Acertou');
  console.log(`Isso aí! você descobriu o número secreto ${numeroSecreto}`);
} else{
   alert('O número secreto era ' + numeroSecreto);
}


let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

if (senha == senhaDoSistema){
    alert("Acesso ao sistema garantido");
} else {
  alert("Senha digitada não corresponde");
  prompt("Digite a senha do sistema")

}*/

alert('Boas vindas ao jogo do número secreto');
//Número randômico inteiro maior que zero será gerados
let nunmeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//let numeroSecreto = parseInt(Math.random());Somente será gerado número zero
//let numeroSecreto = 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

