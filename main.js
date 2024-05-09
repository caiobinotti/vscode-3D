const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll("aba-conteudo");
const contadores = document.querySelectorAll(".contadore");
const tempoobjetivo1 = new Date ("2024-05-10T00;00;00");

contadores[0].textContent = tempoobjetivo1; 

for (let i=0; i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}