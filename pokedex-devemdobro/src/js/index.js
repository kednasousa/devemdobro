/*
  O que precisamos fazer? 
  - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua.
      - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
      - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
      - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
      - passo 4 - adicionar uma classe modo-escuro no body
      - passo 5 - trocar imagem do botão de alterar tema para lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar imagem pro sol
      - passo 6 - verificar se a classe ja tem modo-escuro
      - passo 7 - remover a classe do modo-escuro do body
      - passo 8 - trocar imagem do botão de alterar tema para sol
*/
// - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua.

//- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //váriavel do botão de alterar tema

// - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
// - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  //- passo 6 - verificar se a classe ja tem modo-escuro
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  if (modoEscuroEstaAtivo) {
    //- passo 7 - remover a classe do modo-escuro do body
    body.classList.remove("modo-escuro");

    //- passo 8 - trocar imagem do botão de alterar tema para sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

  } else {
    //- passo 4 - adicionar uma classe modo-escuro no body
    body.classList.add("modo-escuro");

    //- passo 5 - trocar imagem do botão de alterar tema para lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
