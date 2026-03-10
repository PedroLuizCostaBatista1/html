function exibirMensagem(mensagem) {
    alert("Você acessou a seção " + mensagem + ".");
}

const botao = document.getElementById("mostrarInformacoes");
const conteudo = document.getElementById("conteudo");

botao.addEventListener("click", () => {
    conteudo.classList.toggle("escondido");

    if (conteudo.classList.contains("escondido")) {
        botao.textContent = "Mostrar mais informações";
    } else {
        botao.textContent = "Esconder as informações";
    }
});

const elementoImagem = document.getElementById("cesar");
const imagemOriginal = "imagens/Marmelo.png";
const imagemDiferente = "imagens/Cesar.png";

elementoImagem.addEventListener("mouseenter", () => {
    elementoImagem.src = imagemDiferente;
});

elementoImagem.addEventListener("mouseleave", () => {
    elementoImagem.src = imagemOriginal;
});