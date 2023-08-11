//Página "cadastro"

const input = document.querySelectorAll(".inputs"),
    input0 = document.getElementById("input0"),
    select = document.getElementById("select"),
    input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    input3 = document.getElementById("input3"),
    olho = document.getElementById("eye"),
    botao = document.getElementById("btnA"),
    inputE = document.getElementById("guardaEmail"),
    inputS = document.getElementById("guardaSenha"),
    inputObrigatorio = document.getElementById("inputCaptcha");



const cadastro = {
    nome: "",
    pais: "",
    data: 0,
    email: "",
    senha: ""
}

function guardaLogin() {
    if (!inputObrigatorio.checked) {
        alert("Por favor faça o Captcha");

    } else if (input0.value == "") {
        alert("Verifique se o campo de NOME foi preenchido corretamente!");
    } else if (select.value == "País"){
        alert("Verifique se o campo de País foi escolhido!");
    } else if (input1.value == ""){
        alert("Verifique se a data é valida!");
    } else if (input2.value.includes("@") == false || input2.value == ""){
        alert("Verifique se todos os campos foram preenchidos corretamente! A senha deve ter no mínimo 8 caracteres");
    } else if (input3.value.length < 8){
        alert("Verifique se todos os campos foram preenchidos corretamente! A senha deve ter no mínimo 8 caracteres");
    } else {
        cadastro.nome = input0.value;
        cadastro.pais = select.value;
        cadastro.data = input1.value;
        cadastro.email = input2.value;
        cadastro.senha = input3.value;

        inputE.value += input2.value;
        inputS.value += input3.value;

        sessionStorage.setItem("email", inputE);
        sessionStorage.setItem("senha", inputS);

        input.value = "";

        window.location.href = "login.html";

    }
}

function mudaOlho() {
    if (olho.checked) {
        input3.type = "text";
    } else {
        input3.type = "password";
    }
}


// Página "esqueceuSenha"

const emailES = document.getElementById("btn2"),
    redefine = document.getElementById("redefinido"),
    divs = document.querySelectorAll(".displayN"),
    emailInput = document.querySelector("#emailCadastro");

emailES.addEventListener('click', function () {
    if (emailInput.value.includes("@") && emailInput.value != "") {
        console.log("oi");
        redefine.style.display = "";
        divs.forEach(div => {
            div.setAttribute("hidden", true);
        });
    }
});