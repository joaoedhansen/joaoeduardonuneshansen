function recuperarSenha() {
    var txtEmail = document.getElementById("textoEmail");
    var email = txtEmail.value;

    if (! email) {
        exibirErro("Informe um e-mail válido!")
    }
    else {
        exibirRecuperacao("O e-mail foi enviado.")
    }
}
function exibirErro(mensagem) {
    Toastify({
        text: mensagem,
        duration: 3500,
        position: "center",
        style: {
            background: "orangered"
          },
        }).showToast();
}
function exibirRecuperacao(mensagem){
    Toastify({
        text: mensagem,
        duration: 3500,
        position: "center",
        style: {
            background: "#4cbb17"
          },
        }).showToast();
}