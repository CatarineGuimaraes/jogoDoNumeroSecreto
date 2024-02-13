/*ao usarmos o document estamos analisando o documento 
html e queryselctor selecionando a consulta passada por
parâmetros*/
//let titulo = document.querySelector('h1');

/*ao fazermos o trecho a seguir, estamos "chamando" 
a variavel titulo e acrescentando valor, no caso
uma string ja que a tag é h1*/
//titulo.innerHTML = 'Jogo do Número Secreto';


//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


//lista de numeros sorteados
let listaDeNumerosSorteados = [];

//variavel para determinar o numero limite de numeros aleat.
let numeroLimite = 10;

//a avariavel pega o resultado da função
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


/*quando tivermos a repetição de padrões podemos
fazermos funções*/
//função principal de textos
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


//função de exibição de mensagem inicial
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');    
}


/*a função abaixo esta dentro da tag de botão e em
onclic (necessario haver uma funcionalidade), e no arquivo com ext. jvspt ira conseguir fazer*/
function verificarChute(){
    //a variavel chute pega o valor passado pelo usuario pela
    //tag input
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Você acertou!');
            let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);


            //apos o suario acertar o numero secreto deve habilitar
            //o botão de "Novo Jogo"/"Reiniciar"
            document.getElementById('reiniciar').removeAttribute('disabled');
        
        }
        else {
            exibirTextoNaTela('h1', 'Você errou!');
            if(chute > numeroSecreto){
                
                exibirTextoNaTela('p', 'O número secreto é menor');
            }
            else{
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
        tentativas++;

        //a função foi usada para que a cada tentativa 
        //errada, o campo fosse limpo
        limparCampo();
    }
    
}


//chamada da função exibir texto na tela
exibirMensagemInicial();

//função de geração de numeros aleatorios
function gerarNumeroAleatorio(){
    let numeroEscolhido= parseInt(Math.random()* numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    //verificação para saber se o numero escolhido pertence a lista
    //de numero já sorteados
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       //se sim, um novo numero deverá ser gerado
       return gerarNumeroAleatorio(); 
    }
    else {

        //note que, temos que adicionar os itens na lista
        listaDeNumerosSorteados.push(numeroEscolhido);

        //senão, iremos mostrar o número que foi escolhido
        return numeroEscolhido;
        
    }
}

//função responsavel por limpar o campo, a cada
//tentativa feita 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


//função para o botão reiniciar
function reiniciarJogo(){
    //o que será necessário
    //1.chamar a função gerar a numero aleatorio
    //2.chamar a função limparCampo
    //3.tentativas, reiniciadas para que quando o usuário
    //acertar mostrar o nº total delas

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}