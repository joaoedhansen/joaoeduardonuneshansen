function login() {
    var txtEmail = document.getElementById("textoEmail");
    var txtSenha = document.getElementById("textoSenha");
    var email = txtEmail.value;
    var senha = txtSenha.value;

    if (! email) {
        exibirErro("Informe um e-mail válido.");
    }
    else if (! senha){
        exibirErro("Informe sua senha.");
    }
    else {
        realizarLogin("Seu login foi realizado!");
    }
};
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
function realizarLogin(mensagem){
    Toastify({
        text: mensagem,
        duration: 3500,
        position: "center",
        style: {
            background: "#4cbb17"
          },
        }).showToast();
};
