let elementoImagem = document.getElementById("cesar");
const imagemOriginal = "imagens/Marmelo.png";
const imagemDiferente = "imagens/Cesar.png";

elementoImagem.addEventListener("mouseenter", () => {
    elementoImagem.src = imagemDiferente;
});

elementoImagem.addEventListener("mouseleave", () => {
    elementoImagem.src = imagemOriginal;
});