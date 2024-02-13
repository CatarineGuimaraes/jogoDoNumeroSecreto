//função de calculo de media e aprovação de um aluno

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

//função de calculo de media
function calcularMedia(nota1, nota2, nota3, nota3){

    let media;

    //calculo da media
    media= (nota1+nota2+nota3+nota4)/4;
    return media;

}

//função de verificar aprovação
function verificarAprovacao(media){
 return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log(calcularMedia(7,6,3,5));
console.log(verificarAprovacao(get.media));
