let num_secreto = Math.floor(Math.random() * 100) + 1
let qtdtentativas = 0
let verificarResposta = document.getElementById("verificaResposta")
let tentativa_entrada = document.getElementById("tentativa")
let dica = document.getElementById("dica")

verificarResposta.addEventListener("click", function(){

    const tentativa = parseInt(tentativa_entrada.value);

    if (tentativa === num_secreto) {
        dica.textContent = 'Boa boa boa olha só quem acertou. Tu só tentou ${qtdtentativas} vezes' ;
      
        verificarResposta.disabled = true;
    }else if(tentativa < num_secreto){
        dica.textContent = 'Passou raspando viu, mas o número secreto é maior que esse. ${qtdtentativas}'
        qtdtentativas++;
    }else{
        dica.textContent = 'Passou raspando hein, cê ta maluco... Mas o número secreto é menor que esse. ${qtdtentativas}'
        qtdtentativas++;
    }
})