document.getElementById("cep").addEventListener("blur", function() {

let cep = this.value.replace(/\D/g,'');

if (cep.length != 8) {
    alert("CEP inválido");
    return;
}

fetch("https://viacep.com.br/ws/" + cep + "/json/")
.then(response => response.json())
.then(dados => {

    if (dados.erro) {
        alert("CEP não encontrado");
        return;
    }

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;

})
.catch(() => {
    alert("Erro ao buscar CEP");
});

});