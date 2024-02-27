

//objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escolhido.

//Passo 1 - veriddicar se o botão ja esta aberto, se sim, devemos remover a classe ATIVO pra que ele esconda o conteudo novamente */

//Passo 1 pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

const botao = document.querySelector(".button-plataforma");



const elementoPlataformas = document.querySelector(
  ".button-plataforma .plataformas"
);


botao.addEventListener("click", () => {
    
    const BotaoAberto = elementoPlataformas.classList.contains('ativo');

  if (BotaoAberto) {
    elementoPlataformas.classList.remove('ativo') 

  } else{
    elementoPlataformas.classList.add('ativo');
  }
  });




