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

// Função para buscar CNPJ
document.getElementById("cnpj")?.addEventListener("blur", function() {
    let cnpj = this.value.replace(/\D/g, '');

    if (cnpj.length !== 14) {
        alert("CNPJ inválido");
        return;
    }

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        .then(response => {
            if (!response.ok) throw new Error();
            return response.json();
        })
        .then(dados => {
            if (!dados.razao_social) {
                alert("CNPJ não encontrado");
                return;
            }
            if (document.getElementsByName("nome")[0]) {
                document.getElementsByName("nome")[0].value = dados.razao_social;
            }

            if (dados.nome_fantasia && document.getElementById("nome_fantasia")) {
                document.getElementById("nome_fantasia").value = dados.nome_fantasia;
            }

            if (dados.cep) {
                document.getElementById("estado_empresa").value = dados.uf;
            }

            if (dados.situacao_cadastral && document.getElementById("situacao")) {
                document.getElementById("situacao").value = dados.situacao_cadastral;
            }
        })
        .catch(() => {
            alert("Erro ao buscar CNPJ");
        });
});

// Função para buscar IP e preencher cidade/estado
window.onload = function() {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(dados => {
            if (!dados.ip) {
                alert("IP não encontrado");
                return;
            }
            if (document.getElementById("ip_usuario")) {
                document.getElementById("ip_usuario").value = dados.ip;
            }

            const campoCidade = document.getElementById("cidade");
            const campoEstado = document.getElementById("estado");
            document.getElementById("pais").value = dados.country_name;

            if (campoCidade && !campoCidade.value) {
                campoCidade.value = dados.city || "";
            }
            if (campoEstado && !campoEstado.value) {
                campoEstado.value = dados.region_code || "";
            }
        })
        .catch(() => {
            alert("Erro ao buscar IP");
        });
};