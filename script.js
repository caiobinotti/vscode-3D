const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "você gosta da ideia da interligencia artificial?",
        alternativas:["sim", "nao"]
    },
    {
        enunciado: " a inteligencia artificial pode desenvolver conciência própria?",
        alternativas:["sim", "nao"]
    },
    {
        enunciado: "a inteligencia artificial pode tomar decisoes eticas de forma completamente autonoma?",
        alternativas:["sim", "nao"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);

    }
}




