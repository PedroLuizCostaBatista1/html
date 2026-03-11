function mensagemBoasVindas() {
    alert("Bem-vindo ao Marmelo-web");
}

function exibirMensagem(mensagem) {
    alert("Você acessou a seção " + mensagem + ".");
}

function mudarTexto() {
    const botaoEnvio = document.getElementById("botaoEnvio");
    botaoEnvio.value = "Enviada!";

    setTimeout(() => {
        botaoEnvio.value = "Envio";
    }, 2000);
}

function mudarCor() {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");

    link1.style.color = "white";
    link2.style.color = "white";
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