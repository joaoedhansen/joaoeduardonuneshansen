function cadastrar() {
    var nome = document.getElementById("textoNome").value;
    var sobrenome = document.getElementById("textoSobrenome").value;
    var cpf = document.getElementById("textoCpf").value;
    var numero = document.getElementById("textoTelefone").value;
    var email = document.getElementById("textoEmail").value;
    var senha = document.getElementById("textoSenha").value;

    if (! nome) {
        exibirErro("Deve ser informado um nome válido!")
    }
    else if (! sobrenome) {
        exibirErro("Deve ser informado um sobrenome válido!")
    }
    else if (! cpf) {
        exibirErro("Deve ser informado um CPF válido!")
    }
    else if (! numero) {
        exibirErro("Deve ser informado um número válido!")
    }
    else if (! email) {
        exibirErro("Deve ser informado um e-mail válido!")
    }
    else if (! senha) {
        exibirErro("Deve ser informada uma senha válida!")
    }
    else {
        exibirCadastro("Seu cadastro foi efetuado com sucesso!")
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
    };
    function exibirCadastro(mensagem) {
        Toastify({
            text: mensagem,
            duration: 3500,
            position: "center",
            style: {
                background: "#4cbb17"
              },
            }).showToast();
    }