/*
Você foi contratado (a) para desenvolver uma calculadora de média e verificar a situação de aprovação de um aluno com base em suas quatro notas. A média para aprovação é 5. Sua tarefa é implementar duas funções em JavaScript:

calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.
verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".
Utilize essas valores para as notas:

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
*/
// Função para calcular a média
function calcularMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

// Função para verificar a aprovação
function verificarAprovacao(media) {
    if (media >= 5) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Valores das notas
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

// Calcula a média
let mediaAluno = calcularMedia(nota1, nota2, nota3, nota4);

// Verifica a aprovação
let situacaoAluno = verificarAprovacao(mediaAluno);

// Exibe os resultados no console
console.log("Média do aluno:", mediaAluno);
console.log("Situação do aluno:", situacaoAluno);


function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado"
};
function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
};

