function validaCampo() {

    var usuario = document.getElementById("txtUsuario").value;
    var email = document.getElementById("txtEmail").value;
    var senha = document.getElementById("txtSenha").value;
    var confirmacao = document.getElementById("txtConfirmacao").value;
    if (email.length > 0 && senha.length > 0 && confirmacao.length > 0) {
        if (senha == confirmacao) {
            alert("Cadastro realizado com sucesso!");
            return true;
        } else {
            alert("Senha não Coincidem!");
            return false;
        }
    } else {
        alert("Preencha todos os campos!", "");
        return false;
    }

}

function nivelSenha() {
    var nivel = document.getElementById("nivel").value;
    if (senha.length < 3) {
        nivel.innerHTML = "senha fraca";
    } else if (senha.length >= 3 && senha.length <= 3) {
        nivel.innerHTML = "senha fraca";
    } else {
        nivel.innerHTML = "senha fraca";
    }
}